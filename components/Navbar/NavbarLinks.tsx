import { drawerItems } from "./Navbar";
import Link from "next/link";
const NavbarLinks = () => {
  return (
    <nav className="nav__links hidden md:flex md:items-center">
      {drawerItems.map((item) => (
        <Link
          className="font-medium px-3 transition-all duration-200 py-2 hover:bg-[#27272A] rounded-lg"
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
