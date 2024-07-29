import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import footerStyles from "./Footer.module.css";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={footerStyles.footer}>
        <p className={footerStyles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Soroush Sarlak.
        </p>
      </footer>
    </div>
  );
}
export default Sidebar;
