import React from "react";
import code from "../../image/code.png";
const ScanCode = () => {
  return (
    <div className="flex justify-center items-center text-black flex-col gap-5 text-center">
      <p className="font-bold lg:text-2xl md:text-2xl text-xl">
        or scan QR code
      </p>
      <img src={code} alt="" className="w-2/5" />
      <p className="font-semibold text-xl">
        Do not have an account?
        <span className="text-primary font-bold cursor-pointer">
          {" "}
          Signup Here
        </span>{" "}
      </p>
    </div>
  );
};

export default ScanCode;
