"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface Metric {
  label: string;
  before: string;
  after: string;
  delta: string;
}

interface AnimatedMetricsProps {
  metrics: Metric[];
}

function getDeltaColor(delta: string): string {
  if (delta.startsWith("↑") || delta.startsWith("+")) return "text-black";
  if (delta.startsWith("↓")) return "text-[#666]";
  return "text-[#999]";
}

export function AnimatedMetrics({ metrics }: AnimatedMetricsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInView) setVisible(true);
  }, [isInView]);

  return (
    <div ref={ref} className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-black">
            <th className="text-left py-4 pr-6 text-[10px] font-sans font-light text-[#999] tracking-[0.2em] uppercase">
              Metric
            </th>
            <th className="text-left py-4 px-6 text-[10px] font-sans font-light text-[#999] tracking-[0.2em] uppercase">
              Before
            </th>
            <th className="text-left py-4 px-6 text-[10px] font-sans font-light text-[#999] tracking-[0.2em] uppercase">
              After
            </th>
            <th className="text-left py-4 pl-6 text-[10px] font-sans font-light text-[#999] tracking-[0.2em] uppercase">
              Delta
            </th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric, i) => (
            <tr
              key={metric.label}
              className="border-b border-[#e0e0e0] transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <td className="py-5 pr-6 font-sans font-light text-sm text-black">
                {metric.label}
              </td>
              <td className="py-5 px-6 font-sans font-light text-sm text-[#999]">
                {metric.before}
              </td>
              <td className="py-5 px-6 font-sans font-light text-sm text-black">
                {metric.after}
              </td>
              <td className={`py-5 pl-6 font-display text-xl ${getDeltaColor(metric.delta)}`}>
                {metric.delta}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
