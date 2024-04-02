'use client'
import { useState } from "react";
import {ButtonPrimary} from "@/components";
import {ButtonSecondary} from "@/components";
import { SubmitHandler, useForm} from 'react-hook-form';
import {FormItem} from "@/components";
import Link from "next/link";
import {Input} from '@/components';
import { FaGoogle } from "react-icons/fa";
import { login } from "@/actions/auth/login";
import clsx from "clsx";
import { registerUser } from "@/actions";

type FormInputs = {
    name: string;
    email: string;
    password: string;  
  }

const RegisterForm = () => {

    const [errorMessage, setErrorMessage] = useState('')
    const { register, handleSubmit, formState: {errors} } = useForm<FormInputs>();

    
  const onSubmit: SubmitHandler<FormInputs> = async(data) => {
    setErrorMessage('');
    const { name, email, password } = data;
    
    // Server action
    const resp = await registerUser( name, email, password );

    if ( !resp.ok ) {
      setErrorMessage( resp.message );
      return;
    }

    await login( email.toLowerCase(), password );
    window.location.replace('/');


  }


  return (
    <>
      <div className="mx-auto max-w-md ">
        <div className="space-y-6">
          <form action="" onSubmit={ handleSubmit( onSubmit ) } noValidate >
            <div className="">
              {/* <ButtonSecondary className="flex w-full items-center gap-3 border-2 border-primary text-primary rounded-md">
                <FaGoogle className="text-2xl" /> Continua con Google
              </ButtonSecondary> */}
            </div>
            <div className="relative text-center">
              <span className="relative z-10 inline-block rounded-full bg-gray px-4 text-sm font-medium ">
                o registraté
              </span>
              <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 border border-neutral-300" />
            </div>
            <div className="grid grid-cols-1 gap-6">
              <FormItem label="Nombre">
                <Input
                  type="text"
                  rounded="rounded-md"
                  sizeClass="h-12 px-4 py-3"
                  placeholder="Ingresa Nombre"
                  className={
                    clsx(
                      "border-2 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary",
                      {
                        'border-red-500': errors.name
                      }
                    )
                  }
                  autoFocus
                  { ...register('name', { required: true }) }
                />
              </FormItem>
              <FormItem label="Correo electrónico">
                <Input
                  type="email"
                  rounded="rounded-md"
                  sizeClass="h-12 px-4 py-3"
                  placeholder="ejemplo@correo.com"
                  className={
                    clsx(
                      "border-2 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary",
                      {
                        'border-red-500': errors.email
                      }
                    )
                  }
                  { ...register('email', { required: true, pattern: /^\S+@\S+$/i }) }
                />
              </FormItem>
              <FormItem label="Contraseña">
                <Input
                  type="password"
                  rounded="rounded-md"
                  sizeClass="h-12 px-4 py-3"
                  placeholder="Ingresa Contraseña"
                  className={
                    clsx(
                      "border-2 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary",
                      {
                        'border-red-500': errors.password
                      }
                    )
                  }
                  { ...register('password', { required: true, minLength: 6 }) }
                />
              </FormItem>

              <span className="text-red-500">{ errorMessage } </span>
              <ButtonPrimary className="rounded-md">Registrar</ButtonPrimary>
            </div>
            <span className="block text-center font-blod">
              Ya tienes una cuenta? {` `}
              <Link href="/login" className="text-primary">
                Inicia Sesión
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;


