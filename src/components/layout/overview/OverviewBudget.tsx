import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

import styles from "./OverviewBudget.module.css";
import { Budget } from "../../../lib/types";
import { useEffect, useState } from "react";

const COLORS = ["#3f3f46", "#b91c1c", "#4d7c0f", "#0369a1"];

function legendContent(payload: Budget[]) {
  return (
    <ul className={styles.legend}>
      {payload.map((entry, index) => (
        <li
          style={{ color: COLORS[index % COLORS.length] }}
          key={`item-${index}`}
        >
          <div
            style={{ backgroundColor: COLORS[index % COLORS.length] }}
            className={styles.leftBar}
          />
          <span>
            {entry.name.replace("_", " ").toUpperCase()} - ${entry.value}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function OverviewBudget({ data }: { data: Budget[] }) {
  // console.log(data);
  const [legendPosition, setLegendPosition] = useState<"left" | "top">("left");

  // console.log("Re-Render");

  useEffect(function () {
    let pageWidth = window.innerWidth;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        pageWidth = entry.contentRect.width;
        if ((pageWidth <= 1500 && pageWidth > 1024) || pageWidth < 450) {
          setLegendPosition("top");
        } else {
          setLegendPosition("left");
        }
        // console.log(pageWidth);
      }
    });
    resizeObserver.observe(document.body);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className={styles.budget}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="95%"
            fill="#82ca9d"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            verticalAlign={legendPosition === "left" ? "middle" : "top"}
            align={legendPosition === "left" ? "left" : "center"}
            width={180}
            content={() => legendContent(data)}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
