import { FaHome } from "react-icons/fa";
import {
  FaArrowRightArrowLeft,
  FaChartPie,
  FaDollarSign,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import styles from "./NavMenu.module.css";
import { CiMoneyBill } from "react-icons/ci";

export default function NavMenu() {
  return (
    <ul className={styles.navMenu}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.links} ${styles.active}` : styles.links
          }
        >
          <FaHome />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            isActive ? `${styles.links} ${styles.active}` : styles.links
          }
        >
          <FaArrowRightArrowLeft />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/budgets"
          className={({ isActive }) =>
            isActive ? `${styles.links} ${styles.active}` : styles.links
          }
        >
          <FaChartPie />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pots"
          className={({ isActive }) =>
            isActive ? `${styles.links} ${styles.active}` : styles.links
          }
        >
          <FaDollarSign />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/recurring-bills"
          className={({ isActive }) =>
            isActive ? `${styles.links} ${styles.active}` : styles.links
          }
        >
          <CiMoneyBill />
        </NavLink>
      </li>
    </ul>
  );
}
