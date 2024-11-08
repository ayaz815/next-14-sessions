"use client";
import { useRouter } from "next/router";

export const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Place your order");
    router.push("/");
    // router.back("/");
    // router.replace("/");
    // router.forward("/");
  };
  return (
    <>
      <h1>Product List</h1>
      <button onClick={handleClick}>PLace order</button>
    </>
  );
};
