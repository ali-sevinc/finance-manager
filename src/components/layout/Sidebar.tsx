import { NavLink } from "react-router-dom";

import { CiMoneyBill } from "react-icons/ci";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaChartPie, FaDollarSign, FaHome } from "react-icons/fa";

import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.links} ${styles.active}` : styles.links
            }
          >
            <FaHome />
            <span>Overview</span>
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
            <span>Transactions</span>
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
            <span>Budgets</span>
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
            <span>Pots</span>
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
            <span>Recurring Bills</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
