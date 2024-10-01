import Heading from "../ui/Heading";
import styles from "./Overview.module.css";

export default function Overview() {
  return (
    <div className={styles.overview}>
      <Heading>OVERVIEW</Heading>
      <div>balance</div>
      <div className={styles.overviewBody}>
        <div className={styles.pots}>pots</div>
        <div className={styles.budgets}>budgets</div>
        <div className={styles.transactions}>Trancations</div>
        <div className={styles.recurringBills}>recurring bils</div>
      </div>
    </div>
  );
}
