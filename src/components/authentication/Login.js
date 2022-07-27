import React, { useState } from "react";
import authentication from "../../image/authenticaion1.png";
import { ImArrowRight2 } from "react-icons/im";
import ScanCode from "./ScanCode";
const Login = () => {
  const [name, setName] = useState("");
  const [Otp, setOtp] = useState("");
  return (
    <div>
      <div className="grid lg:grid-cols-5  grid-cols-1 h-screen ">
        <div className="  flex flex-col col-span-2  justify-center items-center p-5">
          <h2 className="text-black text-3xl font-bold ">Welcome back </h2>
          <div className="space-y-8 py-7">
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Company Name"
                className="authentication-input"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="OTP"
                className="authentication-input"
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

            <p className="text-black">Forget Password ?</p>

            <div className="flex justify-center items-center">
              {name && Otp ? (
                <button className=" lg:w-[330px] w-full h-[76px] bg-primary text-[22px] font-bold rounded text-white">
                  Login
                </button>
              ) : (
                <button
                  disabled
                  className=" lg:w-[330px] w-full h-[76px] bg-primary bg-opacity-40  text-[22px] font-bold rounded text-white"
                >
                  Login
                </button>
              )}
            </div>
          </div>
          <ScanCode />
        </div>
        <div className="bg-primary  flex flex-col  justify-center items-center text-white lg:px-10 col-span-3  gap-6 lg:p-10 p-3 text-center">
          <div>
            <h3 className="font-bold lg:text-[34px] text-xl mb-2">
              Tip of the day :
            </h3>
            <p className="lg:text-[30px] text-xl">
              Never share your wallet password with anyoune
            </p>
          </div>
          <img src={authentication} alt="" className="w-2/3" />
          <p className="lg:text-[24px] text-xl text-center">
            The weakeset link in security is the human factor. Never share your
            wallet passsword. Also, never login untrusted devices as the
            password might be save in keychain.
          </p>
          <p className="lg:text-[26px] text-xl font-bold flex justify-center items-center gap-2 cursor-pointer">
            <span> More on blog</span> <ImArrowRight2 />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
