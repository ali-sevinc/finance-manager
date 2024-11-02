import { DataType } from "../../lib/types";
import Card from "../ui/Card";
import Heading from "../ui/Heading";

import styles from "./Overview.module.css";
import { ReactNode } from "react";

import OverviewPots from "./overview/OverviewPots";
import OverviewBalance from "./overview/OverviewBalance";
import OverviewBudget from "./overview/OverviewBudget";

type PropsType = {
  data: DataType;
};

function formatDate(dateString: string) {
  const [day, month, year] = dateString.split(".");
  const date = new Date(+year, +month - 1, +day);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function Overview({ data }: PropsType) {
  console.log(data);
  return (
    <div className={styles.overview}>
      <Heading>OVERVIEW</Heading>
      <OverviewBalance data={data.data.balance} />
      <div className={styles.overviewBody}>
        <OverviewPots data={data.data.pots} />
        <div className={styles.budgets}>
          <Card text="See Details" href="budgets">
            <OverviewBudget data={data.data.budget} />
          </Card>
        </div>
        <div className={styles.transactions}>
          <Card text="View All" href="transactions">
            <h2>Transactions</h2>
            <ul>
              {data.data.transactions.map((transaction, i) => {
                if (i > 4) return null;
                let status: ReactNode = (
                  <div className={styles.status}>
                    <p className={styles.income}>+{transaction.amount}</p>
                    <p className={styles.date}>
                      {formatDate(transaction.create_at)}
                    </p>
                  </div>
                );
                if (transaction.status === "expense") {
                  status = (
                    <div className={styles.status}>
                      <p className={styles.expense}>-{transaction.amount}</p>
                      <p className={styles.date}>
                        {formatDate(transaction.create_at)}
                      </p>
                    </div>
                  );
                }
                return (
                  <li key={transaction.id}>
                    <p>{transaction.person}</p>
                    {status}
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>
        <div className={styles.recurringBills}>
          <Card text="See Details" href="recurring-bills">
            Recurring Bils
          </Card>
        </div>
      </div>
    </div>
  );
}
