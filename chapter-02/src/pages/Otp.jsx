/* eslint-disable no-unused-vars */
import { useState } from "react";
import Layout from "../layout/Layout";
import verifyLogin from "../utils/verifyLogin";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Otp() {
    const [pin, setPin] = useState("");
    const navigate = useNavigate();
    const [searchParam] = useSearchParams();
    const email = searchParam.get("email");

    const handleVerifyLogin = () => {};
    verifyLogin(email, pin)
        .then((data) => {
            if (data?.msg === "success") {
                localStorage.setItem("token", data.data);
                navigate("/");
            }
        })
        .catch((err) => console.log("There was an OTP error."));

    return (
        <>
            <Layout>
                <div className="min-h-screen flex items-center justify-center">
                    <from className="login-form-wrap w-full max-w-xl border m-auto py-10 px-10 rounded-3xl">
                        <h2 className="text-3xl font-semibold text-gray-950 mb-2">
                            PIN Verification
                        </h2>
                        <p className="mb-8">
                            4 Digit verification PIN has been send to your
                            email.
                        </p>

                        <input
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            type="number"
                            name=""
                            placeholder="Your OTP"
                            id=""
                            className=" border border-[#EAEAEA] w-full rounded-[10px] py-4 px-[26px] text-[#333333] text-base placeholder:text-[#B0A9A9] focus:border-[#333] focus:outline-none focus:shadow-[0_10px_40px_0_rgba(174,174,174,0.20)] mb-5 "
                        />

                        <button
                            onChange={handleVerifyLogin}
                            className=" rounded-[10px] text-base text-white bg-[#0016DF] w-full h-[58px] hover:bg-[#3947c6] transition-all duration-200"
                        >
                            Continue
                        </button>
                    </from>
                </div>
            </Layout>
        </>
    );
}
