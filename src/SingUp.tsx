import { useState } from "react";
import mobile from "../assets/images/illustration-sign-up-mobile.svg";
import desktop from "../assets/images/illustration-sign-up-desktop.svg";
import RobotoB from "../assets/fonts/Roboto-Bold.ttf";
import iconList from "../assets/images/icon-list.svg";
function SingUp() {
  const singupState = () => {
    return (
      <div className=" lg:bg-[#36384c] lg:h-screen lg:p-10 lg:items-center lg:justify-center  lg:grid">
        <div className="flex flex-col lg:flex-row-reverse lg:p-4 lg:rounded-2xl lg:bg-white lg:max-w-[928px] ">
          <div className="block lg:hidden">
            <img src={mobile} />
          </div>
          <div className="hidden lg:block">
            <img src={desktop} />
          </div>
          <div className="px-5 py-10 lg:mx-6 lg:flex lg:flex-col lg:justify-around">
            <h1 className="font-bold text-3xl text-blue-950  lg:text-6xl">
              {" "}
              Stay updated!{" "}
            </h1>
            <p className="my-5 text-sm lg:text-lg">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="">
              <li className="flex lg:items-center">
                <img src={iconList} className=" h-4" />
                <p className="mx-3   text-sm lg:text-lg">
                  Product discovery and building what matters
                </p>
              </li>
              <li className="flex lg:items-center">
                <img src={iconList} className=" h-4" alt="React logo" />
                <p className="mx-3  text-sm lg:text-lg">
                  {" "}
                  Measuring to ensure updates are a success
                </p>
              </li>
              <li className="flex lg:items-center">
                <img src={iconList} className=" h-4" alt="React logo" />
                <p className="mx-3  text-sm lg:text-lg"> And much more!</p>
              </li>
            </ul>
            <form action="email" method="GET" className="flex flex-col mt-7">
              <label className="text-xs font-extrabold  text-blue-950  ">
                Email address
              </label>
              <div className="">
                <input
                  type="email"
                  placeholder="email@company.com"
                  className="border rounded-md h-10 w-full my-3 px-5  "
                ></input>
                <button
                  className="bg-blue-950 text-sm  font-semibold text-white  w-full  h-11 rounded-md"
                  type="submit"
                >
                  Subscribe to monthly newsletter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  return <div>{singupState()}</div>;
}

export default SingUp;
