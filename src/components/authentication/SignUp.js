import React, { useState } from "react";
import { AiOutlineQrcode } from "react-icons/ai";
import authentication from "../../image/authenticaion1.png";
import { ImArrowRight2 } from "react-icons/im";
import "./authentication.css";
const SignUp = () => {
  const [name, setName] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  return (
    <div className="grid lg:grid-cols-5  grid-cols-1 h-screen ">
      <div className="  flex flex-col col-span-2  justify-center items-center p-5 gap-5">
        <h2 className="text-black text-3xl font-bold py-7 ">Welcome back </h2>
        <div className="w-full space-y-5 px-5">
          <div className="w-full space-y-3 ">
            <div className="form relative">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="textbox "
                placeholder=" "
              />
              <label htmlFor="" className="form-label">
                Company name
              </label>
            </div>
            <div className="form relative">
              <input
                type="text"
                onChange={(e) => setRegNumber(e.target.value)}
                className="textbox"
                placeholder=" "
              />
              <label htmlFor="" className="form-label">
                Registration Number
              </label>
            </div>
            <div className="form relative">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="textbox"
                placeholder=" "
              />
              <label htmlFor="" className="form-label">
                Company Email
              </label>
            </div>
            <div className="form relative">
              <input
                type="text"
                onChange={(e) => setOtp(e.target.value)}
                className="textbox"
                placeholder=" "
              />
              <label htmlFor="" className="form-label">
                OTP
              </label>
            </div>
          </div>

          <button className="  w-full h-[62px] bg-primary text-[22px] font-bold rounded text-white ">
            Submit
          </button>
          <div class="divider font-bold">OR</div>
          <button className="  w-full h-[62px] bg-accent text-[22px] font-bold rounded text-white flex justify-center items-center gap-2">
            <AiOutlineQrcode className="text-3xl" /> Signup with QR Code
          </button>
        </div>
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
          wallet passsword. Also, never login untrusted devices as the password
          might be save in keychain.
        </p>
        <p className="lg:text-[26px] text-xl font-bold flex justify-center items-center gap-2 cursor-pointer">
          <span> More on blog</span> <ImArrowRight2 />
        </p>
      </div>
    </div>
  );
};

export default SignUp;
