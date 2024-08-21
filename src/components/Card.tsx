import Image from "next/image";
import { Button } from "./Button";

export function Card() {
  return (
    <div className="flex-col border border-black pb-4">
      <Image
        src="/modelo_espelhado_FRENTE_menor.jpg"
        alt="Modelo Espelhado"
        width={232}
        height={300}
        className="mb-6"
      />
      <div className="">
        <h5 className="text-black text-center flex-col items-center justify-center mb-2">
          Graphic Design
        </h5>
        <p className=".btn-text font-normal text-black text-center w-40 mx-auto mb-5">
          We focus on ergonomics and meeting you....
        </p>
        <div className="flex justify-center">
          <Button content="Add to cart" variant="black" />
        </div>
      </div>
    </div>
  );
}
