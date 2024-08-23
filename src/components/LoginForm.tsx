import { useState } from "react";
import { Button } from "./Button";

export function LoginForm() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <div className="border border-zinc-300 rounded-xl w-full max-w-form p-9 shadow-lg">
            <h3 className="font-poppins font-light text-2xl mb-7">Welcome!</h3>
            <h2 className="font-poppins font-medium text-3xl mb-1">Sign in to</h2>
            <p className="font-poppins font-normal text-base mb-12">  Lorem Ipsum is simply </p>
            <form>
                <label htmlFor="email" className="font-poppins font-normal text-lg">Email</label>
                <input id="email" placeholder="Enter your email" className="w-full mb-8 mt-2" onChange={(e: any) => setEmail(e.value)} />
                <label htmlFor="email" className="font-poppins font-normal text-lg">Password</label>
                <input id="email" placeholder="Enter your password" type="password" className="w-full mt-2 mb-6" onChange={(e: any) => setPassword(e.value)} />
                <div className="flex justify-between mb-10">
                    <div>
                        <input type="checkbox" id="remember-me" className="mr-2 cursor-pointer" />
                        <label htmlFor="remember-me" className="font-poppins cursor-pointer font-normal text-xs hover:underline">Remember me?</label>
                    </div>
                    <a className="font-poppins font-normal cursor-pointer text-xs hover:underline">Forgot password?</a>
                </div>
                <button className="w-full py-4 rounded-md bg-black text-white font-poppins transition font-medium text-base hover:bg-zinc-700">
                    Login
                </button>
            </form>
        </div>
    )
}