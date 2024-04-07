export const revalidate = 0;

import {  getPaginatedUsers } from "@/actions";
import  {Pagination} from "@/components";


import { redirect } from "next/navigation";

import { UsersTable } from './ui/UsersTable';

export default async function OrdersPage() {

  const { ok, users = [] } = await getPaginatedUsers();

  if (!ok) {
    redirect("/auth/login");
  }

  return (
    <>
      <h1  >Mantenimiento de usuarios</h1>

      <div className="mb-10">
        <UsersTable users={ users } />

        <Pagination totalPages={ 1 } />
      </div>
    </>
  );
}
