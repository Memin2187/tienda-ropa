"use client";

import { logout } from "@/actions";
import { useUIStore } from "@/store";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

const SideBarMenu = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;
  const isAdmin = session?.user.role === "admin";
  return (
    <>
      <div>
        {/* Background black */}
        {isSideMenuOpen && (
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
        )}
        {/* Blur */}
        {isSideMenuOpen && (
          <div
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
            onClick={closeMenu}
          />
        )}
        {/* Sidemenu */}
        <nav
          className={clsx(
            "fixed p-5 right-0 top-0 w-[200px] bg-white z-20 shadow-2xl transform transition-all duration-300",
            {
              "translate-x-full": !isSideMenuOpen,
            }
          )}
        >
          <IoCloseOutline
            size={25}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={closeMenu}
          />
          {isAuthenticated && (
            <>
              <Link
                href="/profile"
                onClick={() => closeMenu()}
                className="flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
              >
                <IoPersonOutline size={15} />
                <span className="ml-3">Perfil</span>
              </Link>

              <Link
                href="/orders"
                onClick={() => closeMenu()}
                className="flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
              >
                <IoTicketOutline size={15} />
                <span className="ml-3">Ordenes</span>
              </Link>
            </>
          )}
          {isAuthenticated && (
            <button className="flex w-full items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
            onClick={()=>logout()}
            >
              <IoLogOutOutline size={15} />
              <span className="ml-3">Salir</span>
            </button>
          )}
          {!isAuthenticated && (
            <Link
              href="/auth/login"
              onClick={() => closeMenu()}
              className="flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoLogInOutline size={15} />
              <span className="ml-3">Ingresar</span>
            </Link>
          )}
          {isAdmin && (
            <>
              {/* Line Separator */}
              <div className="w-full h-px bg-gray-200 my-2" />

              <Link
                href="/admin/products"
                className="flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
                onClick={() => closeMenu()}
              >
                <IoShirtOutline size={15} />
                <span className="ml-3">Productos</span>
              </Link>

              <Link
                href="/admin/orders"
                className="flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
                onClick={() => closeMenu()}
              >
                <IoTicketOutline size={15} />
                <span className="ml-3">Ordenes</span>
              </Link>

              <Link
                href="/admin/users"
                className="flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
                onClick={() => closeMenu()}
              >
                <IoPeopleOutline size={15} />
                <span className="ml-3">Usuarios</span>
              </Link>
            </>
          )}
        </nav>
      </div>
    </>
  );
};

export default SideBarMenu;
