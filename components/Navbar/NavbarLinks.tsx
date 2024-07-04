"use client";
import { useState } from "react";
import { drawerItems } from "./Navbar";
import Link from "next/link";
const NavbarLinks = () => {
  const [activeLink, setActiveLink] = useState(drawerItems[0].linkVal);
  const handleLink = (linkVal: string) => {
    setActiveLink(linkVal);
  };
  return (
    <nav className="nav__links gap-4 text-foreground/60 hidden md:flex md:items-center">
      {drawerItems.map((item, idx) => (
        <Link
          onClick={() => handleLink(drawerItems[idx].linkVal)}
          className={`font-medium ${
            activeLink === drawerItems[idx].linkVal && "text-foreground/80"
          } hover:text-foreground/80 transition-all duration-200`}
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
