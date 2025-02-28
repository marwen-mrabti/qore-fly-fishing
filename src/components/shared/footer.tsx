import { Logo } from "@/assets";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`${styles.footerContent}`}>
          <nav className={styles.footerNav}>
            <div className={styles.footerLogo}>
              <img src={Logo} alt="Central Texas Fly Fishing Logo" />
            </div>
            <div className={styles.footerLinks}>
              <a href="/faq">FAQ</a>
              <a href="/privacy">Privacy</a>
              <a href="/support">Support</a>
              <a href="/contact">Contact</a>
            </div>
          </nav>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className={styles.copyright}>
          © 2024 Central Texas Fly Fishing All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
