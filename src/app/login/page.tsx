"use client";

import Image from "next/image";
import Link from "next/link";

export default function loginPage() {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col items-center justify-center bg-black h-screen w-full lg:w-[588px]">
                <h1 className="text-7xl text-white-1">Board.</h1>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow w-full lg:w-97  p-10 lg:p-0  h-screen">
                <div className="flex flex-col items-center justify-center">
                    <h3 className="self-center lg:self-start text-4xl font-bold">Sign In</h3>
                    <p className="self-center lg:self-start text-base font-lato">
                        Sign in to your account
                    </p>

                    <div className="flex flex-row justify-between items-center gap-1 w-full my-6">
                        <SignInButton provider="google" imageAlt="Google logo" />
                        <SignInButton provider="apple" imageAlt="Apple logo" />
                    </div>

                    <form className="flex flex-col items-start justify-start w-97 bg-white-1 rounded-md p-7.5 text-base">
                        <label htmlFor="email" className="font-lato">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="bg-white-2 w-full h-10 rounded-10 text-base font-lato pl-3.6 py-2.5 leading-[10px]"
                        />
                        <label htmlFor="password" className="pt-5 font-lato">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="bg-white-3 w-full h-10 rounded-10 text-base font-lato pl-3.6 py-2.5 leading-[10px]"
                        />

                        <Link href="#" className="text-base text-link font-lato pt-1 pb-0.5 my-5">
                            Forgot Password?
                        </Link>
                        <button className="bg-black text-white-1 font-bold w-full h-10 rounded-10">
                            Sign In
                        </button>
                    </form>

                    <p className="text-sm text-center text-gray-2 mt-5 w-[261px] self-center font-lato">
                        Don't have an account?{" "}
                        <Link href="#" className="text-link">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

type SignInButtonProps = {
    provider: string;
    imageAlt: string;
};

const SignInButton = ({ provider, imageAlt }: SignInButtonProps) => (
    <button className="flex flex-row items-center text-xs w-45 rounded-md bg-white-1 m-0 py-1 px-2">
        <Image src={`/${provider}.svg`} alt={imageAlt} width={14} height={14} />
        <span className="text-gray-2 ml-2">Sign in with {provider}</span>
    </button>
);
