import { useState } from "react";
import mobile from "../assets/images/illustration-sign-up-mobile.svg";
import desktop from "../assets/images/illustration-sign-up-desktop.svg";
import RobotoB from "../assets/fonts/Roboto-Bold.ttf";
import iconList from "../assets/images/icon-list.svg";

function App() {
  return (
    <div className="flex flex-col sm:flex-row-reverse ">
      <div className="block sm:hidden">
        <img src={mobile} />
      </div>
      <div className="hidden sm:block">
        <img src={desktop} />
      </div>
      <div className="px-5 py-10">
        <h1 className="font-bold text-3xl text-blue-950"> Stay updated! </h1>
        <p className="my-5 text-sm">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="">
          <li className="flex">
            <img src={iconList} className=" h-4" />
            <p className="mx-3  text-sm">
              Product discovery and building what matters
            </p>
          </li>
          <li className="flex">
            <img src={iconList} className=" h-4" alt="React logo" />
            <p className="mx-3  text-sm">
              {" "}
              Measuring to ensure updates are a success
            </p>
          </li>
          <li className="flex">
            <img src={iconList} className=" h-4" alt="React logo" />
            <p className="mx-3  text-sm"> And much more!</p>
          </li>
        </ul>
        <form action="email" method="GET" className="flex flex-col mt-7">
          <label className="text-xs font-semibold  text-blue-950 ">
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
  );
}

export default App;
