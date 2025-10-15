import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const salesData = [
  { month: "Jan", sales: 4200, revenue: 2400 },
  { month: "Feb", sales: 3800, revenue: 2210 },
  { month: "Mar", sales: 5200, revenue: 2900 },
  { month: "Apr", sales: 4600, revenue: 2780 },
  { month: "May", sales: 6100, revenue: 3490 },
  { month: "Jun", sales: 5800, revenue: 3200 },
  { month: "Jul", sales: 7200, revenue: 4100 },
  { month: "Aug", sales: 6800, revenue: 3800 },
  { month: "Sep", sales: 7500, revenue: 4300 },
  { month: "Oct", sales: 8200, revenue: 4800 },
];

export function SalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
        <CardDescription>Monthly sales and revenue trends</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis 
              dataKey="month" 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--primary))', r: 3 }}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="hsl(142.1 76.2% 36.3%)" 
              strokeWidth={2}
              dot={{ fill: 'hsl(142.1 76.2% 36.3%)', r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
