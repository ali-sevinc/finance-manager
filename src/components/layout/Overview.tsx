import Card from "../ui/Card";
import Heading from "../ui/Heading";
import styles from "./Overview.module.css";

export default function Overview() {
  return (
    <div className={styles.overview}>
      <Heading>OVERVIEW</Heading>
      <div>balance</div>
      <div className={styles.overviewBody}>
        <div className={styles.pots}>
          <Card href="pots">Pots</Card>
        </div>
        <div className={styles.budgets}>
          <Card href="budgets">Budget</Card>
        </div>
        <div className={styles.transactions}>
          <Card href="transactions">Trancations</Card>
        </div>
        <div className={styles.recurringBills}>
          <Card href="recurring-bills">Recurring Bils</Card>
        </div>
      </div>
    </div>
  );
}
