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
  console.log(data);

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
            innerRadius={50}
            outerRadius={90}
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
            verticalAlign="top"
            iconType="circle"
            align="center"
            content={() => legendContent(data)}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
