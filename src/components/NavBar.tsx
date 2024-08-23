import { ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";



export function NavBar() {
  const router = useRouter();
  function handleClick() {
    router.push("/login");
  }
  return (
    <div className="bg-white px-48 fixed w-screen h-24 flex items-center justify-between shadow-xl">
      <div className="">
        <Image
          src="/noble_logo.png"
          alt="Noble Logo"
          width={150}
          height={50}
          className="object-cover object-center absolute -mt-10"
        />
      </div>
      <ul className="flex gap-4">
        <li className="relative group w-full">
          <Link
            href="/"
            className="btn-text text-black transition group-hover:text-blue-500"
          >
            Home
          </Link>
          <span className="absolute left-0 bottom-0 w-full h-1 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
        </li>
        <li className="relative group w-full">
          <Link
            href="/shop"
            className="btn-text text-black transition group-hover:text-blue-500"
          >
            Shop
          </Link>
          <span className="absolute left-0 bottom-0 w-full h-1 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
        </li>
      </ul>
      <User onClick={handleClick} className="text-black cursor-pointer hover:text-blue-500" />
    </div>
  );
}
