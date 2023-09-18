/* eslint-disable no-unused-vars */
import { useState } from "react";
import Layout from "../layout/Layout";
import userLogin from "../utils/userLogin";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        userLogin(email)
            .then((data) => {
                if (data?.msg === "success") {
                    navigate(`/otp?email=${email}`);
                }
            })
            .catch((err) => console.log("There was an login error."));
    };

    return (
        <Layout>
            <div className="min-h-screen flex items-center justify-center">
                <div className="login-form-wrap w-full max-w-xl border m-auto py-14 px-10 rounded-3xl">
                    <h2 className="text-4xl font-semibold text-gray-950">
                        Login
                    </h2>
                    <span className="text-2xl font-normal text-gray-950 block mb-11">
                        to get started
                    </span>

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name=""
                        placeholder="Enter your email."
                        className="border border-[#EAEAEA] w-full rounded-[10px] py-4 px-[26px] text-[#333333] text-base placeholder:text-[#B0A9A9] focus:border-[#333]  "
                    />

                    <button
                        onClick={handleLogin}
                        className="rounded-[10px] text-base text-white bg-[#0016DF] w-full h-[58px] hover:bg-[#3947c6] transition-all duration-200 mt-5"
                    >
                        Next
                    </button>
                </div>
            </div>
        </Layout>
    );
}
