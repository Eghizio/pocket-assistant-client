import Image from "next/image";
import logo from "/assets/wallet.svg";

export const Logo = () => {
    return (
        <Image
            src={logo}
            width={40}
            height={40}
            alt="Logo"
            className="filter-white"
        />
    );
};
