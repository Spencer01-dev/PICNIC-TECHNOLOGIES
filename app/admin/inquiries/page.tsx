"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Inbox,
  Mail,
  Phone,
  MessageCircle,
  Building2,
  Calendar,
  DollarSign,
  Search,
  Filter,
  Trash2,
  CheckCircle,
  Clock,
  Archive,
  RefreshCw,
  Download,
  ExternalLink,
  ShieldAlert,
  ArrowRight,
  Lock,
  KeyRound,
  LogOut,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";

interface Inquiry {
  id: string;
  fullName: string;
  businessName?: string;
  email: string;
  phone: string;
  service: string;
  budgetRange?: string;
  preferredContact?: string;
  projectDescription: string;
  status: "new" | "contacted" | "archived";
  createdAt: string;
}

export default function AdminInquiriesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passkeyInput, setPasskeyInput] = useState("");
  const [passkeyError, setPasskeyError] = useState<string | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [showPasskey, setShowPasskey] = useState(false);

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<string>("all");
  const [isUpdating, setIsUpdating] = useState<string | null>(null);

  // Check saved passkey on mount
  useEffect(() => {
    const savedToken =
      sessionStorage.getItem("picnic_admin_token") ||
      sessionStorage.getItem("picnic_admin_passkey");
    if (savedToken) {
      verifyAndLoad(savedToken);
    }
  }, []);

  const verifyAndLoad = async (keyOrToken: string) => {
    setIsAuthenticating(true);
    setPasskeyError(null);
    try {
      const authRes = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passkey: keyOrToken }),
      });

      const authData = await authRes.json();

      if (!authRes.ok) {
        sessionStorage.removeItem("picnic_admin_token");
        sessionStorage.removeItem("picnic_admin_passkey");
        setIsAuthenticated(false);
        setPasskeyError(authData.error || "Invalid passkey. Access denied.");
        return;
      }

      const validToken = authData.token || keyOrToken;
      sessionStorage.setItem("picnic_admin_token", validToken);
      setIsAuthenticated(true);
      fetchInquiries(validToken);
    } catch (err: any) {
      setPasskeyError("Connection error. Please try again.");
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passkeyInput.trim()) {
      setPasskeyError("Please enter your admin passkey");
      return;
    }
    verifyAndLoad(passkeyInput.trim());
  };

  const handleLogout = () => {
    sessionStorage.removeItem("picnic_admin_token");
    sessionStorage.removeItem("picnic_admin_passkey");
    setIsAuthenticated(false);
    setInquiries([]);
    setPasskeyInput("");
  };

  const getSavedKey = () =>
    sessionStorage.getItem("picnic_admin_token") ||
    sessionStorage.getItem("picnic_admin_passkey") ||
    "";

  const fetchInquiries = async (keyOverride?: string) => {
    const key = keyOverride || getSavedKey();
    if (!key) return;

    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/inquiries", {
        headers: {
          "x-admin-token": key,
        },
      });

      if (res.status === 401) {
        handleLogout();
        setPasskeyError("Session expired. Please re-enter passkey.");
        return;
      }

      if (!res.ok) {
        throw new Error("Failed to load inquiries");
      }
      const data = await res.json();
      setInquiries(data.inquiries || []);
    } catch (err: any) {
      setError(err.message || "Failed to load inquiries");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (
    id: string,
    newStatus: "new" | "contacted" | "archived"
  ) => {
    setIsUpdating(id);
    try {
      const res = await fetch("/api/admin/inquiries", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": getSavedKey(),
        },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (!res.ok) throw new Error("Failed to update status");

      setInquiries((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: newStatus } : item
        )
      );
    } catch (err) {
      alert("Failed to update inquiry status");
    } finally {
      setIsUpdating(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this inquiry?"))
      return;
    setIsUpdating(id);
    try {
      const res = await fetch(`/api/admin/inquiries?id=${id}`, {
        method: "DELETE",
        headers: {
          "x-admin-token": getSavedKey(),
        },
      });
      if (!res.ok) throw new Error("Failed to delete inquiry");

      setInquiries((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      alert("Failed to delete inquiry");
    } finally {
      setIsUpdating(null);
    }
  };

  const exportCSV = () => {
    if (inquiries.length === 0) return;
    const headers = [
      "ID",
      "Date",
      "Full Name",
      "Business Name",
      "Email",
      "Phone",
      "Service",
      "Budget Range",
      "Preferred Contact",
      "Status",
      "Description",
    ];

    const rows = inquiries.map((item) => [
      item.id,
      new Date(item.createdAt).toLocaleString(),
      `"${item.fullName.replace(/"/g, '""')}"`,
      `"${(item.businessName || "").replace(/"/g, '""')}"`,
      item.email,
      item.phone,
      `"${item.service.replace(/"/g, '""')}"`,
      `"${(item.budgetRange || "").replace(/"/g, '""')}"`,
      item.preferredContact || "",
      item.status,
      `"${item.projectDescription.replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `picnic_inquiries_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Metrics
  const totalCount = inquiries.length;
  const newCount = inquiries.filter((i) => i.status === "new").length;
  const contactedCount = inquiries.filter((i) => i.status === "contacted").length;

  // Filtered inquiries
  const filteredInquiries = useMemo(() => {
    return inquiries.filter((item) => {
      const matchesStatus =
        selectedStatus === "all" || item.status === selectedStatus;
      const matchesService =
        selectedService === "all" || item.service === selectedService;
      const matchesSearch =
        searchQuery === "" ||
        item.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.businessName &&
          item.businessName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.projectDescription
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      return matchesStatus && matchesService && matchesSearch;
    });
  }, [inquiries, selectedStatus, selectedService, searchQuery]);

  // Unique services list for filter
  const servicesList = useMemo(() => {
    const list = new Set(inquiries.map((i) => i.service).filter(Boolean));
    return Array.from(list);
  }, [inquiries]);

  // 1. LOCKED VIEW (Password prompt)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-[#070b12] flex items-center justify-center px-4 transition-colors">
        <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[#15803d] dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-[11px] font-mono uppercase font-bold text-slate-600 dark:text-slate-300">
              <KeyRound className="w-3 h-3 text-[#15803d]" />
              <span>Restricted Access</span>
            </div>
            <h1 className="text-2xl font-black font-display text-slate-900 dark:text-white">
              PICNIC Admin Portal
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Enter your secret passkey to access client leads and inquiry records.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4 text-left">
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                Admin Passkey
              </label>
              <div className="relative">
                <input
                  type={showPasskey ? "text" : "password"}
                  value={passkeyInput}
                  onChange={(e) => setPasskeyInput(e.target.value)}
                  placeholder="Enter passkey..."
                  autoFocus
                  className="w-full pl-4 pr-11 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#15803d]"
                />
                <button
                  type="button"
                  onClick={() => setShowPasskey(!showPasskey)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  {showPasskey ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {passkeyError && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-xs font-medium text-center">
                {passkeyError}
              </div>
            )}

            <button
              type="submit"
              disabled={isAuthenticating}
              className="w-full py-3 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isAuthenticating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Unlock Admin Portal</span>
                </>
              )}
            </button>
          </form>

          <div className="pt-2">
            <Link
              href="/"
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              &larr; Back to Public Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 2. AUTHENTICATED DASHBOARD
  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-[#070b12] text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-[#15803d] dark:text-emerald-400 text-xs font-mono font-bold uppercase mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Private Admin Inquiries Portal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-slate-900 dark:text-white">
              Client Inquiries & Leads
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Real-time incoming submissions from the PICNIC TECHNOLOGIES project intake form.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchInquiries()}
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-xs transition-colors shadow-sm"
              title="Refresh leads"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`}
              />
              <span>Refresh</span>
            </button>

            <button
              onClick={exportCSV}
              disabled={inquiries.length === 0}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-semibold text-xs shadow-sm transition-colors disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 font-semibold text-xs hover:bg-rose-100 transition-colors"
              title="Lock portal and log out"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Lock Portal</span>
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-mono uppercase text-slate-500 font-bold">
                Total Inquiries
              </p>
              <p className="text-3xl font-black text-slate-900 dark:text-white mt-1">
                {totalCount}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center">
              <Inbox className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0d1424] border border-emerald-200 dark:border-emerald-900/60 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold">
                New / Pending Leads
              </p>
              <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
                {newCount}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0d1424] border border-blue-200 dark:border-blue-900/60 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-mono uppercase text-blue-600 dark:text-blue-400 font-bold">
                Contacted / In Progress
              </p>
              <p className="text-3xl font-black text-blue-600 dark:text-blue-400 mt-1">
                {contactedCount}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Status Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/80 rounded-xl overflow-x-auto">
            {[
              { key: "all", label: "All" },
              { key: "new", label: `New (${newCount})` },
              { key: "contacted", label: "Contacted" },
              { key: "archived", label: "Archived" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedStatus(tab.key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                  selectedStatus === tab.key
                    ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center">
            {/* Service filter */}
            {servicesList.length > 0 && (
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold focus:outline-none"
              >
                <option value="all">All Services</option>
                {servicesList.map((svc) => (
                  <option key={svc} value={svc}>
                    {svc}
                  </option>
                ))}
              </select>
            )}

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs focus:outline-none focus:border-[#15803d]"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        {isLoading ? (
          <div className="py-20 text-center space-y-3">
            <RefreshCw className="w-8 h-8 animate-spin text-[#15803d] mx-auto" />
            <p className="text-slate-500 text-sm font-mono">
              Loading inquiries...
            </p>
          </div>
        ) : error ? (
          <div className="p-8 rounded-2xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 text-center space-y-3">
            <ShieldAlert className="w-8 h-8 text-rose-500 mx-auto" />
            <h3 className="font-bold text-rose-700 dark:text-rose-400">
              Failed to load inquiries
            </h3>
            <p className="text-xs text-rose-600 dark:text-rose-300">{error}</p>
            <button
              onClick={() => fetchInquiries()}
              className="px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold"
            >
              Try Again
            </button>
          </div>
        ) : filteredInquiries.length === 0 ? (
          <div className="py-20 px-4 rounded-3xl bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-slate-800 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
              <Inbox className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-display">
              No inquiries found
            </h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              {searchQuery ||
              selectedStatus !== "all" ||
              selectedService !== "all"
                ? "No inquiries matched your search filters. Try clearing search filters."
                : "No submissions have been received yet. Test by submitting a form on the contact page."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white text-xs font-bold transition-colors"
            >
              <span>Go to Contact Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredInquiries.map((inquiry) => {
              const formattedDate = new Date(
                inquiry.createdAt
              ).toLocaleDateString("en-KE", {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              });

              // Clean phone for WhatsApp
              const cleanPhone = inquiry.phone.replace(/[^0-9]/g, "");
              const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                `Hello ${inquiry.fullName}, thank you for reaching out to Picnic Technologies regarding your ${inquiry.service} project.`
              )}`;

              const mailtoUrl = `mailto:${inquiry.email}?subject=${encodeURIComponent(
                `Picnic Technologies — In Response to Your Inquiry for ${inquiry.service}`
              )}`;

              return (
                <div
                  key={inquiry.id}
                  className={`p-6 rounded-2xl bg-white dark:bg-[#0d1424] border transition-all ${
                    inquiry.status === "new"
                      ? "border-emerald-300 dark:border-emerald-800/80 shadow-md shadow-emerald-500/5"
                      : "border-slate-200 dark:border-slate-800 shadow-sm"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    {/* Main Client Info */}
                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider ${
                            inquiry.status === "new"
                              ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800"
                              : inquiry.status === "contacted"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-300 dark:border-blue-800"
                              : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700"
                          }`}
                        >
                          {inquiry.status}
                        </span>

                        <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                          {inquiry.fullName}
                        </h3>

                        {inquiry.businessName && (
                          <span className="inline-flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 font-semibold bg-slate-100 dark:bg-slate-800/60 px-2.5 py-0.5 rounded-md">
                            <Building2 className="w-3 h-3 text-slate-400" />
                            {inquiry.businessName}
                          </span>
                        )}

                        <span className="text-xs text-slate-400 font-mono flex items-center gap-1 ml-auto lg:ml-0">
                          <Calendar className="w-3 h-3" />
                          {formattedDate}
                        </span>
                      </div>

                      {/* Details Pills */}
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-[#15803d] dark:text-emerald-400 font-bold border border-emerald-200 dark:border-emerald-800/60">
                          {inquiry.service}
                        </span>

                        {inquiry.budgetRange && (
                          <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-1">
                            <DollarSign className="w-3 h-3 text-emerald-600" />
                            {inquiry.budgetRange}
                          </span>
                        )}

                        {inquiry.preferredContact && (
                          <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                            Prefers:{" "}
                            <span className="text-[#15803d] dark:text-emerald-400">
                              {inquiry.preferredContact}
                            </span>
                          </span>
                        )}
                      </div>

                      {/* Project Scope Content */}
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans whitespace-pre-line">
                        {inquiry.projectDescription}
                      </div>

                      {/* Contact Channels */}
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-1 text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          <a
                            href={`mailto:${inquiry.email}`}
                            className="hover:underline hover:text-slate-900 dark:hover:text-white"
                          >
                            {inquiry.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          <a
                            href={`tel:${inquiry.phone}`}
                            className="hover:underline hover:text-slate-900 dark:hover:text-white"
                          >
                            {inquiry.phone}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons Column */}
                    <div className="flex lg:flex-col items-center gap-2 pt-2 lg:pt-0 shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 lg:pl-5">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 lg:w-40 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-colors shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat WhatsApp</span>
                      </a>

                      <a
                        href={mailtoUrl}
                        className="flex-1 lg:w-40 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-bold text-xs transition-colors shadow-xs"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Send Email</span>
                      </a>

                      {/* Status Toggle Selector */}
                      <select
                        value={inquiry.status}
                        onChange={(e) =>
                          handleStatusChange(
                            inquiry.id,
                            e.target.value as "new" | "contacted" | "archived"
                          )
                        }
                        disabled={isUpdating === inquiry.id}
                        className="flex-1 lg:w-40 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold focus:outline-none"
                      >
                        <option value="new">Mark: New</option>
                        <option value="contacted">Mark: Contacted</option>
                        <option value="archived">Mark: Archived</option>
                      </select>

                      {/* Delete */}
                      <button
                        onClick={() => handleDelete(inquiry.id)}
                        disabled={isUpdating === inquiry.id}
                        className="p-2.5 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                        title="Delete Inquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
