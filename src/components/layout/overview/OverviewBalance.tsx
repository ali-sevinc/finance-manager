import { Balance } from "../../../lib/types";
import Card from "../../ui/Card";
import styles from "./OverviewBalance.module.css";

type PropsType = { data: Balance[] };
export default function OverviewBalance({ data }: PropsType) {
  return (
    <div className={styles.balance}>
      <Card>
        <div>
          <h2>Current Balance</h2>
          <p>$ {data[0].current}</p>
        </div>
      </Card>
      <Card>
        <div>
          <h2>Income</h2>
          <p>$ {data[0].income}</p>
        </div>
      </Card>
      <Card>
        <div>
          <h2>Expenses</h2>
          <p>$ {data[0].expenses}</p>
        </div>
      </Card>
    </div>
  );
}
