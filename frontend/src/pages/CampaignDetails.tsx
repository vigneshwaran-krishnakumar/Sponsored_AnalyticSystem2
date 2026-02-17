import { useParams, Link } from "react-router-dom";
import { ArrowLeft, DollarSign, MousePointerClick, TrendingUp, Heart } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import KPICard from "@/components/KPICard";
import ChartCard from "@/components/ChartCard";
import StatusBadge from "@/components/StatusBadge";
import { useApp } from "@/context/AppContext";
import { campaignDailyData, influencers } from "@/data/mockData";

const CampaignDetails = () => {
  const { id } = useParams();
  const { campaigns } = useApp();
  const campaign = campaigns.find((c) => c.id === id);

  if (!campaign) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-muted-foreground">Campaign not found.</p>
      </div>
    );
  }

  const roi = Math.round(((campaign.revenue - campaign.spent) / campaign.spent) * 100);
  const progress = Math.round((campaign.spent / campaign.budget) * 100);
  const campaignInfluencers = influencers.filter((i) => campaign.influencerIds.includes(i.id));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/dashboard/campaigns"><ArrowLeft className="h-4 w-4" /></Link>
        </Button>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-foreground">{campaign.name}</h1>
            <StatusBadge status={campaign.status} />
          </div>
          <p className="text-sm text-muted-foreground">{campaign.brand} · {campaign.startDate} → {campaign.endDate}</p>
        </div>
      </div>

      {/* Summary Card */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-card">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Budget Progress</p>
            <p className="text-lg font-semibold text-foreground">${campaign.spent.toLocaleString()} / ${campaign.budget.toLocaleString()}</p>
          </div>
          <div className="w-full max-w-xs">
            <div className="h-3 overflow-hidden rounded-full bg-secondary">
              <div className="h-full rounded-full bg-primary" style={{ width: `${Math.min(progress, 100)}%` }} />
            </div>
            <p className="mt-1 text-right text-xs text-muted-foreground">{progress}% spent</p>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard title="Revenue" value={`$${campaign.revenue.toLocaleString()}`} icon={DollarSign} />
        <KPICard title="Clicks" value={campaign.clicks.toLocaleString()} icon={MousePointerClick} />
        <KPICard title="ROI" value={`${roi}%`} changeType="positive" icon={TrendingUp} />
        <KPICard title="Engagement" value={`${campaign.engagementRate}%`} icon={Heart} />
      </div>

      {/* Performance Chart */}
      <ChartCard title="Performance Trend" subtitle="Daily clicks and conversions">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={campaignDailyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
            <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" />
            <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" />
            <Tooltip />
            <Line type="monotone" dataKey="clicks" stroke="hsl(234, 89%, 56%)" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="conversions" stroke="hsl(260, 65%, 60%)" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Influencer List */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-card">
        <h3 className="mb-4 text-base font-semibold text-foreground">Campaign Influencers</h3>
        <div className="space-y-3">
          {campaignInfluencers.map((inf) => (
            <div key={inf.id} className="flex items-center justify-between rounded-lg border border-border/50 p-4 transition-colors hover:bg-secondary/20">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">{inf.avatar}</div>
                <div>
                  <p className="font-medium text-foreground">{inf.name}</p>
                  <p className="text-xs text-muted-foreground">{inf.platform} · {(inf.followers / 1000000).toFixed(1)}M followers</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-foreground">{inf.engagementRate}%</p>
                <p className="text-xs text-muted-foreground">Engagement</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
