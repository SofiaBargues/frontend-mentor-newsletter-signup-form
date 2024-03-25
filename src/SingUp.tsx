import { useState } from "react";
import mobile from "../assets/images/illustration-sign-up-mobile.svg";
import desktop from "../assets/images/illustration-sign-up-desktop.svg";
import RobotoB from "../assets/fonts/Roboto-Bold.ttf";
import iconList from "../assets/images/icon-list.svg";
function SingUp() {
  const thankState = () => {
    return (
      <div>
        {" "}
        <div className="h-screen  lg:bg-[rgb(54,56,76)] lg:h-screen lg:p-10 lg:items-center lg:justify-center  lg:grid">
          <div className="h-screen  m-6 lg:h-[520px] flex flex-col justify-center  lg:flex-col lg:p-10 lg:rounded-2xl lg:bg-white lg:max-w-[928px] ">
            <div className="">
              <img src={iconList} className="h-[64px]" />
            </div>

            <div className=" py-6 lg:m-10 lg:flex lg:flex-col lg:justify-around">
              <div className="flex flex-col justify-">
                <h1 className="font-bold text-3xl text-[#242742] lg:text-6xl ">
                  Thanks for<br></br> subscribing!
                </h1>
                <p className="my-5 w-[327px] h-[96px] text-sm text-[#242742] lg:text-lg">
                  A confirmation email has been sent to{" "}
                  <span className="font-bold">ash@loremcompany.com</span>.
                  Please open it and click the button inside to confirm your
                  subscription.
                </p>
              </div>
            </div>
            <form
              action="email"
              method="GET"
              className="flex flex-col justify-end h-[150px]"
            >
              <button
                className="bg-blue-950 text-sm lg:text-2xl lg:rounded-2xl  font-semibold text-white  w-full  h-11 lg:h-20  rounded-md"
                type="submit"
              >
                Dismiss message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

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
  return <div>{thankState()}</div>;
}

export default SingUp;
