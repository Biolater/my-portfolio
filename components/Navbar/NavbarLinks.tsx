"use client";
import { useState, useEffect } from "react";
import { drawerItems } from "./Navbar";
import Link from "next/link";
const NavbarLinks = () => {
  const [activeLink, setActiveLink] = useState(drawerItems[0].linkVal);
  const sections = drawerItems.map((item) => item.linkVal);
  const handleLink = (linkVal: string) => {
    setActiveLink(linkVal);
  };
  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections
        .map((section) => {
          const element = document.getElementById(section.split("#")[1]);
          return element
            ? {
                id: section,
                offset: element.offsetTop,
                height: element.offsetHeight,
              }
            : undefined;
        })
        .filter(Boolean);

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of offsets) {
        if (
          section &&
          scrollPosition >= section.offset &&
          scrollPosition < section.offset + section.height
        ) {
          setActiveLink(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

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
