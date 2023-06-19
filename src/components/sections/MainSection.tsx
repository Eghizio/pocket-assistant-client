import { Raleway } from "next/font/google";
import Link from "next/link";
import styled from "styled-components";

// If loading a variable font, you don't need to specify the font weight
const raleway = Raleway({ subsets: ["latin"] });

export const MainSection = () => {
    return (
        <main className="bg-pink-500 px-96 py-20 flex flex-col items-start gap-4">
            <h2 className={`text-white text-5xl p-6 m-0 ${raleway.className}`}>
                Pocket Assistant: Empower your finances, achieve your goals.
            </h2>

            <p className={`text-white text-2xl p-6 ${raleway.className}`}>
                Take charge of your financial journey with Pocket Assistant. Our
                intuitive app simplifies budget management, helping you gain
                control, save money, and reach your financial goals with ease.
            </p>

            <Link href="/register">
                <button
                    type="button"
                    name="get-started"
                    aria-label="Get Started"
                    className={`bg-black hover:scale-110 uppercase rounded-full text-xl font-bold text-white py-4 px-16 ml-5 ${raleway.className}`}
                >
                    Get started
                </button>
            </Link>
        </main>
    );
};
