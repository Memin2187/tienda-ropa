"use client";
import Link from "next/link";
import { NavLinks } from "@/seed/seed";
import NavigationItem from "./NavItem";
import { LuUser2 } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";
import { Logo } from "@/components";

import CartSideBar from "./CartSideBar";
import MenuBar from "./MenuBar";
import SideBarMenu from "../Menu/SideBarMenu";

import { useUIStore } from "@/store";

const MainNav = () => {

  const openSideMenu = useUIStore((state) => state.openSideMenu);
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

        <div className="flex flex-row items-center justify-end gap-7 lg:flex-1">
          <RiSearch2Line className="text-2xl hidden" />
          <Link href="#"
          onClick={openSideMenu}
          >
            <LuUser2 className="text-2xl" />
          </Link>
          <CartSideBar />
          <SideBarMenu />
          
        </div>

       

        <div className="lg:hidden">
          <MenuBar />
        </div>
      </div>
    </>
  );
};

export default MainNav;
