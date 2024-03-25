import { useRef, useState } from "react";
import mobile from "../assets/images/illustration-sign-up-mobile.svg";
import desktop from "../assets/images/illustration-sign-up-desktop.svg";
import RobotoB from "../assets/fonts/Roboto-Bold.ttf";
import iconList from "../assets/images/icon-list.svg";
function SingUp() {
  const [errorEmail, setErrorEmail] = useState("");
  const [isActiveError, setIsActiveError] = useState(false);
  const [showState, setShowState] = useState(false);
  const inputRefEmail = useRef(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const swichToSingup = () => {
    setShowState(false);
  };

  const currentEmailValue = () => {
    return inputRefEmail.current.value;
  };

  const submitEmail = (event) => {
    event.preventDefault();
    console.log(inputRefEmail.current.value);
    if (
      inputRefEmail.current.value === "" ||
      !isValidEmail(inputRefEmail.current.value)
    ) {
      setErrorEmail("Valid email required");
      setIsActiveError(true);
      setShowState(false);
    } else {
      setErrorEmail("");
      setIsActiveError(false);
      setShowState(true);
    }
  };

  const thankState = () => {
    return (
      <div>
        {" "}
        <div className="h-screen  lg:bg-[rgb(54,56,76)] lg:h-screen lg:p-10 lg:items-center lg:justify-center  lg:grid">
          <div className="m-6 lg:m-0  lg:h-[520px] flex flex-col justify-center  lg:flex-col lg:p-20 lg:rounded-2xl lg:bg-white lg:max-w-[928px] ">
            <div className=" py-6 lg:my-10 lg:flex lg:flex-col lg:justify-around">
              <div className="flex flex-col gap-9">
                <div className="">
                  <img src={iconList} className="lg:mt-20 h-[64px]" />
                </div>
                <h1 className="font-bold text-3xl text-[#242742] lg:text-5xl ">
                  Thanks for<br></br> subscribing!
                </h1>
                <p className="my-5  lg:my-0 w-[376px] h-[96px] lg:h-[72px] lg:text-left lg:text-sm text-[#242742]">
                  A confirmation email has been sent to{" "}
                  <span className="font-bold">{currentEmailValue()}</span>.
                  Please open it and click the button inside to confirm your
                  subscription.
                </p>
                <form
                  action="email"
                  method="GET"
                  className="flex flex-col justify-end lg:justify-normal h-[150px]"
                >
                  <button
                    onClick={swichToSingup}
                    className="hover:bg-[#ff6742] hover:shadow-lg hover:shadow-[#ffa8a2] hover:bg-gradient-to-b from-[#FF6A3A] to-[#FF527B] bg-blue-950 text-sm lg:text-xl lg:rounded-2xl lg:w-[376px] lg:h-[56px] font-semibold text-white w-full h-11 rounded-md"
                    type="submit"
                  >
                    Dismiss message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const singupState = () => {
    return (
      <div className=" lg:bg-[#36384c] lg:h-screen  lg:p-10 lg:items-center lg:justify-center  lg:grid">
        <div className=" flex flex-col lg:flex-row-reverse lg:p-4 lg:rounded-2xl lg:bg-white lg:max-w-[928px] ">
          <div className="block lg:hidden">
            <img src={mobile} />
          </div>
          <div className="hidden lg:block">
            <img src={desktop} />
          </div>
          <div className="px-5  py-10 lg:mx-10 lg:flex lg:flex-col lg:justify-around">
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
              <div className="label-box flex justify-between">
                <div className="text-xs font-bold flex text-blue-950  ">
                  Email address
                </div>
                <div className="text-xs font-bold  text-[#FF6155]  ">
                  {errorEmail}
                </div>
              </div>
              <div className="">
                <input
                  type="email"
                  ref={inputRefEmail}
                  placeholder="email@company.com"
                  className="h-11 border rounded-md lg:h-[58px] w-full my-3 px-5  "
                  style={{
                    borderColor: isActiveError ? "hsl(4, 100%, 67%)" : "",
                    backgroundColor: isActiveError
                      ? "hsl(4, 100%, 67%,0.2)"
                      : "",
                    color: isActiveError ? "hsl(4, 100%, 67%)" : "",
                  }}
                ></input>

                <button
                  onClick={submitEmail}
                  className="hover:bg-[#ff6742] lg:h-[58px] hover:shadow-lg hover:shadow-[#ffa8a2] hover:bg-gradient-to-b from-[#FF6A3A] to-[#FF527B] bg-blue-950 text-sm  font-semibold text-white  w-full  h-11 rounded-md"
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
  return (
    <div>
      {showState ? <div>{thankState()}</div> : <div>{singupState()}</div>}
    </div>
  );
}

export default SingUp;
