import { Logo } from "@/assets";
import NavigationMenu from "@/components/shared/navigation";
import styles from "./Header.module.css";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export type T_NavItem = {
  name: string;
  link: string;
};

const NavList: T_NavItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={` ${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logoWrapper}>
        <Link to="/" preload="intent" aria-label="Go to Home">
          <img src={Logo} alt="Central Texas Fly Fishing Logo" className={styles.logo} />
        </Link>
        <span className={styles.logoText}>Central Texas Fly Fishing</span>
      </div>
      <NavigationMenu navList={NavList} />
    </header>
  );
}
