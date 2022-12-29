import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";

export interface INavbarProps {
}

const Navbar: React.FC<INavbarProps> = () => {
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <>
            <div className="w-screen h-16 pt-4 absolute top-0 z-50 sm:h-20">
                <div className="w-screen h-full pl-[20%] pr-[20%]">
                    <div
                        className="flex w-auto h-auto justify-evenly text-white font-bold uppercase text-xl items-center hidden lg:flex">

                            {currentRoute === "/" ?
                                <div className="flex flex-col items-center justify-center hover:text-gray-800">
                                    <Link href="/">
                                        Home
                                    </Link>
                                    <div className="absolute pb-16 w-28 border-white border-b-8 flex justify-center rounded-lg opacity-40 hidden lg:flex" />
                                </div>
                                :
                                <Link href="/">
                                    Home
                                </Link>}

                        {currentRoute === "/Design" ?
                            <div className="flex flex-col items-center justify-center hover:text-gray-800">
                                <Link href="/Design">
                                    Design
                                </Link>
                                <div className="absolute pb-16 w-28 border-white border-b-8 flex justify-center rounded-lg opacity-40 hidden lg:flex" />
                            </div>
                            :
                            <Link href="/Design">
                                Design
                            </Link>}



                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
