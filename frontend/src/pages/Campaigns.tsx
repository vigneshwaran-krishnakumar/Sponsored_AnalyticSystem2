import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/StatusBadge";
import { useApp } from "@/context/AppContext";

const Campaigns = () => {
  const { campaigns } = useApp();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Campaigns</h1>
          <p className="text-sm text-muted-foreground">Manage your sponsorship campaigns</p>
        </div>
        <Button variant="hero" size="sm">+ New Campaign</Button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/30">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Campaign</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Budget</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Progress</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">Revenue</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">ROI</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c) => {
              const progress = Math.round((c.spent / c.budget) * 100);
              const roi = Math.round(((c.revenue - c.spent) / c.spent) * 100);
              return (
                <tr key={c.id} className="border-b border-border/50 last:border-0 transition-colors hover:bg-secondary/20">
                  <td className="px-4 py-4">
                    <p className="font-medium text-foreground">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.brand}</p>
                  </td>
                  <td className="px-4 py-4"><StatusBadge status={c.status} /></td>
                  <td className="px-4 py-4 text-foreground">${c.budget.toLocaleString()}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-24 overflow-hidden rounded-full bg-secondary">
                        <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${Math.min(progress, 100)}%` }} />
                      </div>
                      <span className="text-xs text-muted-foreground">{progress}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right font-medium text-foreground">${c.revenue.toLocaleString()}</td>
                  <td className="px-4 py-4 text-right font-semibold text-chart-4">{roi}%</td>
                  <td className="px-4 py-4 text-right">
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/dashboard/campaigns/${c.id}`}><Eye className="h-4 w-4" /></Link>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Campaigns;
