import { Suspense } from "react";
import Header from "@/components/Header/Header";
import Loading from "../loading";
import Footer from "@/components/Footer/Footer";


export default function ShopLayout({
    children
  }: {
    children: React.ReactNode;
  }) {
    return (
        <>
        <Header/>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer/>
      </>
    );
  }