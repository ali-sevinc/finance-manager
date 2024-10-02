import { Outlet } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import styles from "./RootPage.module.css";
import NavMenu from "../layout/NavMenu";

export default function RootPage() {
  return (
    <div className={styles.rootPage}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>

      <div className={styles.contentContainer}>
        <Outlet />
      </div>
      <div className={styles.navMenuContainer}>
        <NavMenu />
      </div>
    </div>
  );
}
