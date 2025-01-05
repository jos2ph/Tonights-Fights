"use client";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  UFC: {
    label: "UFC",
    color: "#2563eb",
  },
  OneFC: {
    label: "OneFC",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", UFC: 186, OneFC: 80 },
  { month: "February", UFC: 305, OneFC: 200 },
  { month: "March", UFC: 237, OneFC: 120 },
  { month: "April", UFC: 73, OneFC: 190 },
  { month: "May", UFC: 209, OneFC: 130 },
  { month: "June", UFC: 214, OneFC: 140 },
];

export function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>MMA Fight Chart </CardTitle>
        <CardDescription>
          Showing total upcoming fights <TrendingUp className="h-4 w-4" />{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-[500px] h-[200px]">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="OneFC"
              type="natural"
              fill="var(--color-OneFC)"
              fillOpacity={0.4}
              stroke="var(--color-OneFC)"
              stackId="a"
            />
            <Area
              dataKey="UFC"
              type="natural"
              fill="var(--color-UFC)"
              fillOpacity={0.4}
              stroke="var(--color-UFC)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
export default Component;
