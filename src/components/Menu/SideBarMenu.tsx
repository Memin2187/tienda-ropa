"use client";

import clsx from "clsx";

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

interface Props{
 
  setMenu:Dispatch<SetStateAction<boolean>>
}

const SideBarMenu = ({setMenu}:Props) => {

  const cerrarMenu =()=>{
    setMenu(false)
  }
  return (
    <>
      <div>
        {/* Background black */}

        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />

        {/* Blur */}

        <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />

        {/* Sidemenu */}
        <nav
          className={clsx(
            "fixed p-5 right-0 top-0 w-[200px] bg-white z-20 shadow-2xl transform transition-all duration-300",
            {}
          )}
        >
          <IoCloseOutline
            size={25}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={cerrarMenu}
          />

          <>
            <Link
              href="/profile"
              className="flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoPersonOutline size={15} />
              <span className="ml-3">Perfil</span>
            </Link>

            <Link
              href="/orders"
              className="flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoTicketOutline size={15} />
              <span className="ml-3">Ordenes</span>
            </Link>
          </>

          <button className="flex w-full items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all">
            <IoLogOutOutline size={15} />
            <span className="ml-3">Salir</span>
          </button>

          <Link
            href="/auth/login"
            className="flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoLogInOutline size={15} />
            <span className="ml-3">Ingresar</span>
          </Link>

          <>
            {/* Line Separator */}
            <div className="w-full h-px bg-gray-200 my-2" />

            <Link
              href="/admin/products"
              className="flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoShirtOutline size={15} />
              <span className="ml-3">Productos</span>
            </Link>

            <Link
              href="/admin/orders"
              className="flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoTicketOutline size={15} />
              <span className="ml-3">Ordenes</span>
            </Link>

            <Link
              href="/admin/users"
              className="flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoPeopleOutline size={15} />
              <span className="ml-3">Usuarios</span>
            </Link>
          </>
        </nav>
      </div>
    </>
  );
};

export default SideBarMenu;
