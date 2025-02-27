import type { T_NavItem } from "@/components/shared/header";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./navigation-menu.module.css";

interface NavbarProps {
  navList: T_NavItem[];
}

export default function NavigationMenu({ navList }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navigation}>
      <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        {navList.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            preload="intent"
            className={styles.navLink}
            activeProps={{ className: styles.active }}
            onClick={toggleMenu}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
