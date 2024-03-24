'use client';

import type { FC } from 'react';
import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';

import {ButtonPrimary} from '@/components';
import {ButtonSecondary} from '@/components';
import {FormItem} from '@/components';
import {Input} from '@/components';
import {Radio} from '@/components';




const ShippingAddress: FC = () => {
  return (
    <div className="rounded-xl border border-neutral-300 p-4">
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
          
        </div>
      </div>
      <div>
        {/* ============ */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
          <div>
            <FormItem label="Nombre">
              <Input
                rounded="rounded-md"
                sizeClass="h-12 px-4 py-3"
                className="border-2 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                defaultValue="Clark"
              />
            </FormItem>
          </div>
          <div>
            <FormItem label="Apellido">
              <Input
                rounded="rounded-md"
                sizeClass="h-12 px-4 py-3"
                className="border-2 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                defaultValue="Kent"
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
                defaultValue="1234 Calle Principal"
                type="text"
              />
            </FormItem>
          </div>
          <div className="sm:w-1/3">
            <FormItem label="Número Interior *">
              <Input
                rounded="rounded-md"
                sizeClass="h-12 px-4 py-3"
                className="border-2 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                defaultValue="567"
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
                defaultValue="Aguascalientes"
              />
            </FormItem>
          </div>
          <div>
            <FormItem label="País">
              <select
                className="block w-full  border-transparent bg-gray text-sm focus:border-transparent py-3"
                defaultValue="United States "
              >
                <option value="United States">Estados Unidos</option>
                <option value="United States">Canada</option>
                <option value="United States">México</option>
                <option value="United States">Israel</option>
                <option value="United States">Francia</option>
                <option value="United States">Inglaterra</option>
                <option value="United States">Laos</option>
                <option value="United States">China</option>
              </select>
            </FormItem>
          </div>
        </div>

        {/* ============ */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
          <div>
            <FormItem label="Estado/Provincia">
              <Input
                rounded="rounded-md"
                sizeClass="h-12 px-4 py-3"
                className="border-2 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                defaultValue="Aguascalientes"
              />
            </FormItem>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
            <div>
              <FormItem label="Teléfono">
                <Input
                  rounded="rounded-md"
                  sizeClass="h-12 px-4 py-3"
                  className="border-2 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                  
                />
              </FormItem>
            </div>
          </div>
        </div>
        <div>
          <FormItem label="Codigo Postal">
            <Input
              rounded="rounded-md"
              sizeClass="h-12 px-4 py-3"
              className="border-2 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
              defaultValue="12345"
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
      </div>

      {/* ============ */}
      <div className="flex flex-col p-6 sm:flex-row">
        <ButtonPrimary className="shadow-none sm:!px-7" 
        href={'/checkout'}
        >
          Guardar y Pagar
        </ButtonPrimary>
        <ButtonSecondary
          className="mt-3 sm:ml-3 sm:mt-0"
          
        >
          Cancelar
        </ButtonSecondary>
      </div>
    </div>
  );
};

export default ShippingAddress;
