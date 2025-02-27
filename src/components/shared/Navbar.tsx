import { Link } from "@tanstack/react-router";

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

export default function Navbar({ styles }: { styles: Record<string, string> }) {
  return (
    <nav className={styles.navigation}>
      <ul>
        {NavList.map((item) => (
          <li key={item.name}>
            <Link
              to={item.link}
              preload="intent"
              activeProps={{
                className: styles.active,
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
