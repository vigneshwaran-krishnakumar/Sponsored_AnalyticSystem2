import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
}

const KPICard = ({ title, value, change, changeType = "neutral", icon: Icon }: KPICardProps) => {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 hover:shadow-card-hover">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
      <p className="mt-3 text-3xl font-bold tracking-tight text-card-foreground">{value}</p>
      {change && (
        <p className={cn("mt-1 text-sm font-medium", changeType === "positive" && "text-chart-4", changeType === "negative" && "text-destructive", changeType === "neutral" && "text-muted-foreground")}>
          {change}
        </p>
      )}
    </div>
  );
};

export default KPICard;
