"use client";
import Link from "next/link";
import { NavLinks } from "@/seed/seed";
import NavigationItem from "./NavItem";
import { LuUser2 } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";
import { Logo } from "@/components";

import CartSideBar from "./CartSideBar";
import MenuBar from "./MenuBar";

const MainNav = () => {
  return (
    <>
      <div className="container flex items-center justify-between">
        <div className="flex-1">
          <Logo />
        </div>

        <div className="hidden items-center gap-7 lg:flex">
          {NavLinks.map((item) => (
            <NavigationItem key={item.id} menuItem={item} />
          ))}
        </div>

        <div className="hidden flex-1 items-center justify-end gap-7 lg:flex">
          <RiSearch2Line className="text-2xl" />
          <Link href="#">
            <LuUser2 className="text-2xl" />
          </Link>
          <CartSideBar />
          SideBarMenu
        </div>

        <div className="lg:hidden">
          <MenuBar />
        </div>
      </div>
    </>
  );
};

export default MainNav;
