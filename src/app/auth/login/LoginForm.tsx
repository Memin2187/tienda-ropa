"use client";

import { FormItem } from "@/components";
import Link from "next/link";
import { Input } from "@/components";

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/actions";

import clsx from "clsx";
import { useEffect } from "react";

const LoginForm = () => {
  const [state, dispatch] = useFormState(authenticate, undefined);

  useEffect(() => {
    if (state === "Success") {
      // redireccionar
      // router.replace('/');
      window.location.replace("/");
    }
  }, [state]);

  return (
    <div className="nc-PageLogin" data-nc-id="PageLogin">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center justify-center text-3xl font-semibold leading-[115%] md:text-5xl md:leading-[115%]">
          Inicia Sesión
        </h2>
        <div className="mx-auto max-w-md">
          <div className="space-y-6">
            <div className="">
              {/* <ButtonSecondary 
              className="flex w-full items-center gap-3 border-2 border-primary text-primary rounded-md"
              onClick={handleSignInWithGoogle}
              >
                <FaGoogle className="text-2xl" /> Continua con Google
              </ButtonSecondary> */}
            </div>
            <div className="relative text-center">
              <span className="relative z-10 inline-block rounded-full bg-gray px-4 text-sm font-medium ">
                O Ingresa aquí
              </span>
              <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 border border-neutral-300" />
            </div>
            <form action={dispatch}>
              <div className="grid gap-6">
                <FormItem label="Correo Electrónico">
                  <Input
                    type="email"
                    rounded="rounded-md"
                    sizeClass="h-12 px-4 py-3"
                    placeholder="ejemplo@correo.com"
                    name="email"
                    className="border-2 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                  />
                </FormItem>
                <FormItem label="Contraseña">
                  <Input
                    type="password"
                    rounded="rounded-md"
                    sizeClass="h-12 px-4 py-3"
                    placeholder="Ingresa contraeña"
                    name="password"
                    className="border-2 border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                  />
                </FormItem>
                {state === "CredentialsSignin" && (
                  <div className="items-end space-x-1 bg-red-600 text-center rounded-md p-4">
                    <p className="text-sm text-white font-bold">
                      Credenciales no son correctas
                    </p>
                  </div>
                )}
                <LoginButton />
                {/* <button
                  className="rounded-md bg-black text-white font-bold p-2"
                  type="submit"
                >
                  Ingresar
                </button> */}
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <Link href="/forgot-pass" className="font-bold">
                  Olvide Contraseña
                </Link>
                <span className="block text-center">
                  No tienes Cuenta? {` `}
                  <Link href="/auth/new-account" className="text-primary">
                    Registraté
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={clsx({
        "rounded-md bg-black text-white font-bold p-2": !pending,
        "bg-gray-600 text-white py-2 px-4 rounded transition-all": pending,
      })}
      disabled={pending}
    >
      Ingresar
    </button>
  );
}

export default LoginForm;
