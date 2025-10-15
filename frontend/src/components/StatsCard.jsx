import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

export function StatsCard({ title, value, change, icon: Icon, trend }) {
  const isPositive = trend === "up";

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
          {isPositive ? (
            <ArrowUpIcon className="h-3 w-3 text-green-500" />
          ) : (
            <ArrowDownIcon className="h-3 w-3 text-red-500" />
          )}
          <span className={isPositive ? "text-green-500" : "text-red-500"}>
            {change}%
          </span>
          <span>from last month</span>
        </div>
      </CardContent>
    </Card>
  );
}
