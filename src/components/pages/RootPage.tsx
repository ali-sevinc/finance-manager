import { Outlet } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import styles from "./RootPage.module.css";

export default function RootPage() {
  return (
    <div className={styles.rootPage}>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
