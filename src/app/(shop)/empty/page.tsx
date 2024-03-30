import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const page = () => {
  return (
    <div className="bg-gray-200">
      <div className="flex justify-center lg:items-center lg:h-[300px]">
        <div className="flex justify-center  items-center bg-white shadow-md rounded-lg lg:w-2/4 w-full m-4 ">
          <IoCartOutline size={80} className="mx-5" />

          <div className="flex flex-col items-center ">
            <h1 className="text-2xl font-semibold m-8">Tu carrito está vacío</h1>

            <Link
              href={`/`}
              className="bg-black text-white font-bold p-4 rounded-lg m-4"
            >
              Regresar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
