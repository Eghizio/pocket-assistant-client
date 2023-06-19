import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface FormValues {
    username: string;
    password: string;
    password_repeat: string;
}

type authStatus = "anonymous" | "signed" | "failed";

export const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormValues>({
        username: "",
        password: "",
        password_repeat: "",
    });
    const [userStatus, setUserStatus] = useState<authStatus>("anonymous");
    const [statusMessage, setStatusMessage] = useState<string>();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <>
            <div className="mx-auto py-6 px-6 lg:px-8 text-left">
                {isLoading && (
                    <div className="text-center">
                        <h3 className="mb-4 text-xl font-medium bg-blue-500 text-gray-900">
                            Registering to Pocket Assistant!
                        </h3>
                    </div>
                )}
                {userStatus === "signed" && (
                    <div>
                        <p className="text-green-400 text-center text-xl font-bold">
                            {statusMessage}
                        </p>
                    </div>
                )}
                {!isLoading && userStatus !== "signed" && (
                    <form className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Your email:
                            </label>
                            <input
                                type="email"
                                name="username"
                                id="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="JohnyDoe@video.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Your password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                            />

                            <label
                                htmlFor="password_repeat"
                                className="block mb-2 text-sm font-medium text-gray-900 mt-2"
                            >
                                Repeat your password
                            </label>
                            <input
                                type="password"
                                name="password_repeat"
                                id="password_repeat"
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                            />
                        </div>
                        {userStatus === "failed" && (
                            <p className="text-red-400 text-center font-bold">
                                {statusMessage}
                            </p>
                        )}
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Register your account!
                        </button>
                        <div className="text-sm font-medium text-gray-500">
                            Already registered?{" "}
                            <Link
                                href="/login"
                                className=" cursor-pointer text-blue-700 hover:underline"
                            >
                                Log in to your account!
                            </Link>
                        </div>
                    </form>
                )}
            </div>
        </>
    );
};
