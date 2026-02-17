import type { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const ChartCard = ({ title, subtitle, children, className }: ChartCardProps) => {
  return (
    <div className={`rounded-xl border border-border bg-card p-6 shadow-card ${className ?? ""}`}>
      <div className="mb-4">
        <h3 className="text-base font-semibold text-card-foreground">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
};

export default ChartCard;
