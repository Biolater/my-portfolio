import Link from "next/link";
import DrawerComponent from "./DrawerComponent";
import NavbarLinks from "./NavbarLinks";
import { ModeToggle } from "../ToggleTheme/ToggleTheme";
export const drawerItems = [
  {
    text: "Home",
    linkVal: "#home",
  },
  {
    text: "About",
    linkVal: "#about",
  },
  {
    text: "Skills",
    linkVal: "#skills",
  },
  {
    text: "Projects",
    linkVal: "#projects",
  },
  {
    text: "Contact",
    linkVal: "#contact",
  },
];
const Navbar = () => {
  return (
    <header className="main__header z-20 sticky top-0 backdrop-blur-lg border-b border-border/40 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="main__header__logo">
          <span className="text-2xl font-semibold">yusubov</span>
        </Link>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <DrawerComponent />
          <NavbarLinks />
          <ModeToggle hideToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
