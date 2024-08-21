"use client";

import { Button } from "@/components/Button";
import { NavBar } from "@/components/NavBar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  function handleClick() {
    router.push("/shop");
  }
  return (
    <>
      <NavBar />
      <div className="h-screen w-screen flex overflow-hidden">
        <div className="bg-[url('/bg-hero1.png')] bg-cover bg-center h-screen w-1/2 flex items-center justify-center">
          <div>
            <h5 className="text-white mb-6">SUMMER 2024</h5>
            <h1 className="text-white mb-6">Black T-shirt Olympics</h1>
            <h4 className="text-white mb-6">
              We know how large objects will act.
            </h4>
            <Button content="SHOP NOW" onClick={handleClick} variant="white" />
          </div>
        </div>
        <div className="bg-[url('/noble_modelo_frente_1.png')] bg-cover bg-center h-screen w-1/2 overflow-hidden"></div>
      </div>
    </>
  );
}
