import { Logo } from "@/assets";
import Navbar from "@/components/shared/Navbar";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Central Texas Fly Fishing Logo" className={styles.logo} />
        <span className={styles.logoText}>Central Texas Fly Fishing</span>
      </div>
      <Navbar styles={styles} />
    </header>
  );
}
