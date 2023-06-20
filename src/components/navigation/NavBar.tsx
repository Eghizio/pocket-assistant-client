import { Link, List, ListItem } from "@mui/joy";
import NextLink from "next/link";
import { Logo } from "./Logo";

export const NavBar = () => {
    return (
        <header>
            <nav className="flex items-center justify-around flex-wrap bg-blue-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Logo />
                    <span className="font-semibold text-xl tracking-tight pl-3">
                        Pocket Assistant
                    </span>
                </div>

                <div className="w-full block lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link
                            href="/register"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                        >
                            Register
                        </Link>
                        <Link
                            href="/login"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                        >
                            Log in
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};
