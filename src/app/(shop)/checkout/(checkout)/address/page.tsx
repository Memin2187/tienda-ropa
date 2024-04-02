import { getCountries } from "@/actions";
import { auth } from "@/auth.config";
import { getUserAddress } from "@/actions";
import ShippingAddress from "./ShippingAddress";

const Page = async() => {


  const countries = await  getCountries();

  const session = await auth();

  if ( !session?.user ) {
    return (
      <h3 className="text-5xl">500 -  No hay sesión de usuario</h3>
    )
  }

  const userAddress = await  getUserAddress(session.user.id) ?? undefined;

  return (
    <div className="container">
      <ShippingAddress
      countries={countries}
      userStoredAddress={ userAddress }
      />
    </div>
  );
};

export default Page;
