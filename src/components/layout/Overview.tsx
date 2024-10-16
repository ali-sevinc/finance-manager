import { DataType } from "../../lib/types";
import Card from "../ui/Card";
import Heading from "../ui/Heading";

import { FaSackDollar } from "react-icons/fa6";

import styles from "./Overview.module.css";
import { ReactNode } from "react";

type PropsType = {
  data: DataType;
};

export default function Overview({ data }: PropsType) {
  console.log(data);
  return (
    <div className={styles.overview}>
      <Heading>OVERVIEW</Heading>
      <div className={styles.balance}>
        <Card>
          <div>
            <h2>Current Balance</h2>
            <p>$ {data.data.balance[0].current}</p>
          </div>
        </Card>
        <Card>
          <div>
            <h2>Income</h2>
            <p>$ {data.data.balance[0].income}</p>
          </div>
        </Card>
        <Card>
          <div>
            <h2>Expenses</h2>
            <p>$ {data.data.balance[0].expenses}</p>
          </div>
        </Card>
      </div>
      <div className={styles.overviewBody}>
        <div className={styles.pots}>
          <Card text="See Details" href="pots">
            <div>
              <h2>Pots</h2>
              <div className={styles.pot}>
                <div className={styles.total}>
                  <span>
                    <FaSackDollar />
                  </span>
                  <div>
                    <p>Total Saved</p>
                    <p>{data.data.pots[0].total_saved}</p>
                  </div>
                </div>
                <div className={styles.otherPots}>
                  <div>
                    <h4>Savings</h4>
                    <p>{data.data.pots[0].savings}</p>
                  </div>
                  <div>
                    <h4>Gift</h4>
                    <p>{data.data.pots[0].gift}</p>
                  </div>
                  <div>
                    <h4> Concert Ticket</h4>
                    <p>{data.data.pots[0].concert_ticked}</p>
                  </div>
                  <div>
                    <h4>New Laptop</h4>
                    <p>{data.data.pots[0].new_laptop}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className={styles.budgets}>
          <Card text="See Details" href="budgets">
            Budget
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
                    <p className={styles.date}>{transaction.create_at}</p>
                  </div>
                );
                if (transaction.status === "expense") {
                  status = (
                    <div className={styles.status}>
                      <p className={styles.expense}>-{transaction.amount}</p>
                      <p className={styles.date}>{transaction.create_at}</p>
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
