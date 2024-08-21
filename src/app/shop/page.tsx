import { Card } from "@/components/Card";
import { NavBar } from "@/components/NavBar";

export default function Shop() {
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
          <div className="grid grid-cols-3 gap-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
