import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

const metrics = [
  { name: "Customer Satisfaction", value: 92, target: 95, color: "bg-green-500" },
  { name: "Response Time", value: 78, target: 85, color: "bg-blue-500" },
  { name: "Order Fulfillment", value: 88, target: 90, color: "bg-purple-500" },
  { name: "Team Productivity", value: 95, target: 90, color: "bg-orange-500" },
];

export function PerformanceMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
        <CardDescription>Key performance indicators and targets</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{metric.name}</span>
              <span className="text-muted-foreground">
                {metric.value}% / {metric.target}%
              </span>
            </div>
            <Progress value={metric.value} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
