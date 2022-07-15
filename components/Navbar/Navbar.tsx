import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "../NavItem/NavItem";

const MENU_LIST = [
  { text: "Services", href: "/services" },
  { text: "Swimming Pools", href: "/swimming-pools" },
  { text: "Driveways", href: "/driveways" },
  { text: "Fencing", href: "/fencing" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState<any | null>(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
    <header className="sticky z-30 top-0 bg-white ">
      <nav
        className={`nav flex max-w-full md:max-w-none justify-between relative overflow-hidden items-center container py-8 px-6 ${
          navActive ? "active" : ""
        }
        `}
      >
        <Link href={"/"}>
          <a onClick={() => setActiveIdx(-1)}>
            <h1 className="text-xl font-semibold">Dorset Driveways</h1>
          </a>
        </Link>
        <div
          className={`menu__icon md:hidden ${
            navActive ? "active" : "inactive"
          }`}
          onClick={() => setNavActive(!navActive)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`nav__menu ${navActive ? "active" : ""}`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.href}
            >
              <NavItem {...menu} active={idx === activeIdx} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;