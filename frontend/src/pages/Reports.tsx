import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import KPICard from "@/components/KPICard";
import ChartCard from "@/components/ChartCard";
import { useApp } from "@/context/AppContext";

const dateRanges = ["Last 7 days", "Last 30 days", "Last 90 days", "This Year"];

const Reports = () => {
  const { metrics, campaigns } = useApp();
  const [dateRange, setDateRange] = useState("Last 30 days");
  const [campaignFilter, setCampaignFilter] = useState("all");

  const totalClicks = campaigns.reduce((sum, c) => sum + c.clicks, 0);
  const totalConversions = campaigns.reduce((sum, c) => sum + c.conversions, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Reports</h1>
          <p className="text-sm text-muted-foreground">Analyze campaign performance and generate reports</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm"><Download className="mr-1 h-4 w-4" /> Export CSV</Button>
          <Button variant="outline" size="sm"><FileText className="mr-1 h-4 w-4" /> Export PDF</Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="flex gap-1 rounded-lg border border-border bg-card p-1">
          {dateRanges.map((d) => (
            <button key={d} onClick={() => setDateRange(d)} className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${d === dateRange ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {d}
            </button>
          ))}
        </div>
        <select
          value={campaignFilter}
          onChange={(e) => setCampaignFilter(e.target.value)}
          className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground outline-none"
        >
          <option value="all">All Campaigns</option>
          {campaigns.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard title="Total Revenue" value={`$${(metrics.totalRevenue / 1000).toFixed(0)}K`} icon={Download} />
        <KPICard title="Total Clicks" value={totalClicks.toLocaleString()} icon={FileText} />
        <KPICard title="Conversions" value={totalConversions.toLocaleString()} icon={Download} />
        <KPICard title="Avg Engagement" value={`${metrics.engagementRate}%`} icon={FileText} />
      </div>

      {/* Chart Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Revenue Trend" subtitle={dateRange}>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={metrics.revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" tickFormatter={(v) => `$${v / 1000}K`} />
              <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, ""]} />
              <Line type="monotone" dataKey="revenue" stroke="hsl(234, 89%, 56%)" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Influencer Performance" subtitle="Revenue comparison">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={metrics.influencerPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" tickFormatter={(v) => `$${v / 1000}K`} />
              <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]} />
              <Bar dataKey="revenue" fill="hsl(260, 65%, 60%)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
};

export default Reports;
