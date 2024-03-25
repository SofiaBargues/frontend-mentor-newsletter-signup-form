import { useRef, useState } from "react";
import mobile from "../assets/images/illustration-sign-up-mobile.svg";
import desktop from "../assets/images/illustration-sign-up-desktop.svg";
// import RobotoB from "../assets/fonts/Roboto-Bold.ttf";
import iconList from "../assets/images/icon-list.svg";
function SingUp() {
  const [errorEmail, setErrorEmail] = useState("");
  const [isActiveError, setIsActiveError] = useState(false);
  const [showState, setShowState] = useState(false);
  const inputRefEmail = useRef<HTMLInputElement>(null);

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const swichToSingup = () => {
    setShowState(false);
  };

  const currentEmailValue = () => {
    const current = inputRefEmail.current;
    if (current) {
      return current.value;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitEmail = (event: any) => {
    event.preventDefault();
    console.log(inputRefEmail.current?.value);
    if (
      inputRefEmail.current?.value === "" ||
      !isValidEmail(inputRefEmail.current?.value || "")
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
        <div className="h-screen sm:bg-[rgb(54,56,76)] sm:h-screen sm:p-10 sm:items-center sm:justify-center  sm:grid">
          <div className=" sm:m-0 sm:h-[520px] flex flex-col justify-center  sm:flex-col sm:p-20 sm:rounded-2xl sm:bg-white sm:max-w-[928px] max-w-[375px] m-auto">
            <div className=" py-6 sm:my-10 sm:flex sm:flex-col sm:justify-around">
              <div className="flex flex-col gap-9">
                <div className="">
                  <img src={iconList} className="sm:mt-20 h-[64px]" />
                </div>
                <h1 className="font-bold text-3xl text-[#242742] sm:text-5xl ">
                  Thanks for<br></br> subscribing!
                </h1>
                <p className="my-5  sm:my-0 w-[376px] h-[96px] sm:h-[72px] sm:text-left sm:text-sm text-[#242742]">
                  A confirmation email has been sent to{" "}
                  <span className="font-bold">{currentEmailValue()}</span>.
                  Please open it and click the button inside to confirm your
                  subscription.
                </p>
                <form
                  action="email"
                  method="GET"
                  className="flex flex-col justify-end sm:justify-normal h-[150px]"
                >
                  <button
                    onClick={swichToSingup}
                    className="hover:bg-[#ff6742] hover:shadow-sm hover:shadow-[#ffa8a2] hover:bg-gradient-to-b from-[#FF6A3A] to-[#FF527B] bg-blue-950 text-sm sm:text-xl sm:rounded-2xl sm:w-[376px] sm:h-[56px] font-semibold text-white w-full h-11 rounded-md"
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
      <div className=" sm:bg-[#36384c] sm:h-screen  sm:p-10 sm:items-center sm:justify-center  sm:grid">
        <div className="max-w-[375px] flex items-center m-auto flex-col sm:flex-row-reverse sm:p-4 sm:rounded-2xl sm:bg-white sm:max-w-[928px] ">
          <div className="block self-center sm:hidden">
            <img src={mobile} />
          </div>
          <div className="hidden sm:block self-center ">
            <img src={desktop} />
          </div>
          <div className="px-5  py-10 sm:mx-10 sm:flex sm:flex-col sm:justify-around">
            <h1 className=" font-bold text-3xl text-blue-950  sm:text-6xl">
              {" "}
              Stay updated!{" "}
            </h1>
            <p className="my-5 text-sm sm:text-sm">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="">
              <li className="flex sm:items-center">
                <img src={iconList} className=" h-4" />
                <p className="mx-3   text-sm sm:text-sm">
                  Product discovery and building what matters
                </p>
              </li>
              <li className="flex sm:items-center">
                <img src={iconList} className=" h-4" alt="React logo" />
                <p className="mx-3  text-sm sm:text-sm">
                  {" "}
                  Measuring to ensure updates are a success
                </p>
              </li>
              <li className="flex sm:items-center">
                <img src={iconList} className=" h-4" alt="React logo" />
                <p className="mx-3  text-sm sm:text-sm"> And much more!</p>
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
                  className="h-11 border rounded-md sm:h-[58px] w-full my-3 px-5  "
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
                  className="hover:bg-[#ff6742] sm:h-[58px] hover:shadow-xl hover:shadow-[#ffa8a2] hover:bg-gradient-to-b from-[#FF6A3A] to-[#FF527B] bg-blue-950 text-sm  font-semibold text-white  w-full  h-11 rounded-md"
                  type="submit"
                >
                  Subscribe to monthly newsletter
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <div className=" text-red-300  hover:text-yellow-300   from-red-200 to- f font-medium rounded-lg text-xl  text-center flex align-bottom   ">
          Sofi 🌼
        </div> */}
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
