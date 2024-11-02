import { FaSackDollar } from "react-icons/fa6";
import Card from "../../ui/Card";
import styles from "./OverviewPots.module.css";
import { Pot } from "../../../lib/types";

type PropsType = { data: Pot[] };
export default function OverviewPots({ data }: PropsType) {
  return (
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
                <p>{data[0].total_saved}</p>
              </div>
            </div>
            <div className={styles.otherPots}>
              <div>
                <h4>Savings</h4>
                <p>{data[0].savings}</p>
              </div>
              <div>
                <h4>Gift</h4>
                <p>{data[0].gift}</p>
              </div>
              <div>
                <h4> Concert Ticket</h4>
                <p>{data[0].concert_ticked}</p>
              </div>
              <div>
                <h4>New Laptop</h4>
                <p>{data[0].new_laptop}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
