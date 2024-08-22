"use client";
import { Card } from "@/components/Card";
import { NavBar } from "@/components/NavBar";
import FetchApi from "@/hooks/fetchApi";
import { useEffect } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
}

export default function Shop() {
  const { data, loading, error } = FetchApi("/products");
  return (
    <>
      <NavBar />
      <div className="pt-56 w-screen flex justify-center">
        <div>
          <div className="w-content-shop mx-auto mb-9">
            <h4 className="text-black text-center">Featured Products</h4>
            <h2 className="text-black text-center">Featured Products</h2>
            <p className=".btn-text font-normal text-center px-10">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanic
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-20">
            {data?.map((product: Product) => {
              <Card
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                stock={product.stock}
              />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
