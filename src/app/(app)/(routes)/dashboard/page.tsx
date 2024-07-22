"use client";

import {
  Bar,
  BarChart,
  Label,
  Rectangle,
  ReferenceLine,
  XAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PageHeader } from "@/features/dashboard/components/page-header";

export default function DashboardPage() {
  return (
    <div className="h-full">
      <PageHeader>
        <h4 className="scroll-m-20 text-xl font-medium tracking-tight text-slate-800">
          Visão Geral
        </h4>
      </PageHeader>

      <main className="px-4">
        <Card className="lg:max-w-md" x-chunk="charts-01-chunk-0">
          <CardHeader className="space-y-0 pb-2">
            <CardDescription>Hoje</CardDescription>
            <CardTitle className="text-4xl tabular-nums">
              37
              <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                {" "}
                atendimentos
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                atendimentos: {
                  label: "Atendimentos",
                  color: "hsl(var(--chart-2))",
                },
              }}
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: -4,
                  right: -4,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    atendimentos: 10,
                  },
                  {
                    date: "2024-01-02",
                    atendimentos: 23,
                  },
                  {
                    date: "2024-01-03",
                    atendimentos: 11,
                  },
                  {
                    date: "2024-01-04",
                    atendimentos: 43,
                  },
                  {
                    date: "2024-01-05",
                    atendimentos: 23,
                  },
                  {
                    date: "2024-01-06",
                    atendimentos: 22,
                  },
                  {
                    date: "2024-01-07",
                    atendimentos: 7,
                  },
                ]}
              >
                <Bar
                  dataKey="atendimentos"
                  fill="var(--color-atendimentos)"
                  radius={5}
                  fillOpacity={0.6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  tickFormatter={(value) => {
                    return new Date(value).toLocaleDateString("pt-BR", {
                      weekday: "short",
                    });
                  }}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      hideIndicator
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("pt-BR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        });
                      }}
                    />
                  }
                  cursor={false}
                />
                <ReferenceLine
                  y={23}
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                >
                  <Label
                    position="insideBottomLeft"
                    value="Média de Atendimentos"
                    offset={10}
                    fill="hsl(var(--foreground))"
                  />
                  <Label
                    position="insideTopLeft"
                    value="23"
                    className="text-lg"
                    fill="hsl(var(--foreground))"
                    offset={10}
                    startOffset={100}
                  />
                </ReferenceLine>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-1">
            <CardDescription>
              Nos últimos 7 dias, foram realizados{" "}
              <span className="font-medium text-foreground">139</span>{" "}
              atendimentos.
            </CardDescription>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
