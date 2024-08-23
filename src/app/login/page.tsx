"use client";
import { LoginForm } from "@/components/LoginForm";

export default function Login() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <LoginForm />
            <div className="w-2/5" />
        </div>
    )
}