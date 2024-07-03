import { drawerItems } from "./Navbar";
import Link from "next/link";
const NavbarLinks = () => {
  return (
    <nav className="nav__links gap-4 text-foreground/60 hidden md:flex md:items-center">
      {drawerItems.map((item) => (
        <Link
          className="font-medium hover:text-foreground/80 transition-all duration-200"
          href={item.linkVal}
          key={item.text}
        >
          {item.text}
        </Link>
      ))}
    </nav>
  );
};

export default NavbarLinks;
