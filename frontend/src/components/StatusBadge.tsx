import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "active" | "paused" | "completed";
}

const statusStyles = {
  active: "bg-chart-4/15 text-chart-4",
  paused: "bg-chart-5/15 text-chart-5",
  completed: "bg-chart-1/15 text-chart-1",
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize", statusStyles[status])}>
      {status}
    </span>
  );
};

export default StatusBadge;
