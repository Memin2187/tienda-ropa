"use client";

import { useEffect, type FC } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";

import { TbTruckDelivery } from "react-icons/tb";

import { ButtonPrimary } from "@/components";
import { ButtonSecondary } from "@/components";
import { FormItem } from "@/components";
import { Input } from "@/components";
import { Radio } from "@/components";

import { useRouter } from "next/navigation";
import { useAddressStore } from "@/store";
import { setUserAddress } from "@/actions";
import { deleteUserAddress } from "@/actions";
import clsx from "clsx";

import { FormInputs } from "@/interfaces";
import { Address } from "@/interfaces";
import { Country } from "@/interfaces";

interface Props {
  countries: Country[];
  userStoredAddress?: Partial<Address>;
}

const ShippingAddress: FC<Props> = ({ countries, userStoredAddress = {} }) => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { isValid },
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
      ...(userStoredAddress as any),
      rememberAddress: false,
    },
  });

  const { data: session } = useSession({
    required: true,
  });

  const setAddress = useAddressStore((state) => state.setAddress);
  const address = useAddressStore((state) => state.address);

  useEffect(() => {
    if (address.firstName) {
      reset(address);
    }
  }, [address, reset]);

  const onSubmit = async (data: FormInputs) => {
    const { rememberAddress, ...restAddress } = data;

    setAddress(restAddress);

    if (rememberAddress) {
      await setUserAddress(restAddress, session!.user.id);
    } else {
      await deleteUserAddress(session!.user.id);
    }

    router.push("/checkout");
  };

  return (
    <div className="rounded-xl border border-neutral-300 ">
      <div className="flex flex-col items-start p-6 sm:flex-row">
        <span className="hidden sm:block">
          <TbTruckDelivery className="text-3xl text-primary" />
        </span>

        <div className="flex w-full items-center justify-between">
          <div className="sm:ml-8">
            <span className="uppercase">DIRECCIÓN DE ENVÍO</span>
            <div className="mt-1 text-sm font-semibold">
              <span className="">
                1234 Calle Principal, Apt 567, Aguascalientes, Ags.
              </span>
            </div>
          </div>
          <ButtonPrimary
            className="border-2 border-gray-700 bg-transparent text-primary hover:bg-black"
            textClassName="text-primary"
            sizeClass="px-4 py-2"
          >
            Editar
          </ButtonPrimary>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* ============ */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
            <div>
              <FormItem label="Nombre">
                <Input
                  rounded="rounded-md"
                  sizeClass="h-12 px-4 py-3"
                  className="border-2 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                  {...register("firstName", { required: true })}
                />
              </FormItem>
            </div>
            <div>
              <FormItem label="Apellido">
                <Input
                  rounded="rounded-md"
                  sizeClass="h-12 px-4 py-3"
                  className="border-2 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                  {...register("lastName", { required: true })}
                />
              </FormItem>
            </div>
          </div>

          {/* ============ */}
          <div className="space-y-4 sm:flex sm:space-x-3 sm:space-y-0">
            <div className="flex-1">
              <FormItem label="Dirección">
                <Input
                  rounded="rounded-md"
                  sizeClass="h-12 px-4 py-3"
                  className="border-2 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                  placeholder=""
                  type="text"
                  {...register("address", { required: true })}
                />
              </FormItem>
            </div>
          </div>

          {/* ============ */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
            <div>
              <FormItem label="Ciudad">
                <Input
                  rounded="rounded-md"
                  sizeClass="h-12 px-4 py-3"
                  className="border-2 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                  {...register("city", { required: true })}
                />
              </FormItem>
            </div>
            <div>
              <FormItem label="País">
                <select
                  className="block w-full  border-transparent bg-gray text-sm focus:border-transparent py-3"
                  {...register("country", { required: true })}
                >
                  <option value="">[ Seleccione ]</option>
                  {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </FormItem>
            </div>
          </div>

          {/* ============ */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
            <div>
              <FormItem label="Teléfono">
                <Input
                  rounded="rounded-md"
                  sizeClass="h-12 px-4 py-3"
                  className="border-2 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                  {...register("phone", { required: true })}
                />
              </FormItem>
            </div>
          </div>
          <div>
            <FormItem label="Codigo Postal">
              <Input
                rounded="rounded-md"
                sizeClass="h-12 px-4 py-3"
                className="border-2 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                {...register("postalCode", { required: true })}
              />
            </FormItem>
          </div>
        </div>

        {/* ============ */}
        <div className="px-6">
          <FormItem label="Tipo Domicilio">
            <div className="mt-1.5 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
              <Radio
                label="Hogar(Entrega en todo el día)"
                id="Address-type-home"
                name="Address-type"
                defaultChecked
              />
              <Radio
                label="Officina(Entrega 9 AM - 5 PM)"
                id="Address-type-office"
                name="Address-type"
              />
            </div>
          </FormItem>
          <div className="inline-flex items-center mb-10 ">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-3"
              htmlFor="checkbox"
            >
              <input
                type="checkbox"
                className="border-gray-500 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                id="checkbox"
                {...register("rememberAddress")}
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </label>

            <span>¿Recordar dirección?</span>
          </div>
        </div>

        {/* ============ */}
        <div className="flex flex-col p-6 sm:flex-row">
          <button
            type="submit"
            className={clsx({
              "shadow-none sm:!px-7 bg-gray-500 text-white p-2 rounded":
                isValid,
              "bg-gray-500 text-white p-2 rounded btn-disabled ": !isValid,
            })}
          >
            Guardar y Pagar
          </button>
          <ButtonSecondary className="mt-3 sm:ml-3 sm:mt-0">
            Cancelar
          </ButtonSecondary>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
