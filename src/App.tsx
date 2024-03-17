import { useState } from "react";
import mobile from "../assets/images/illustration-sign-up-mobile.svg";
import iconList from "../assets/images/icon-list.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <img src={mobile} className="logo react" alt="React logo" />
      </div>
      <div>
        <h1> Stay updated! </h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li className="flex">
            <img src={iconList} className="logo react" alt="React logo" />
            <p>Product discovery and building what matters</p>
          </li>
          <li className="flex">
            <img src={iconList} className="logo react" alt="React logo" />
            <p> Measuring to ensure updates are a success</p>
          </li>
          <li className="flex">
            <img src={iconList} className="logo react" alt="React logo" />
            <p> And much more!</p>
          </li>
        </ul>
        <form>
          <label>Email address</label>
          <input></input>
        </form>
      </div>
    </div>
  );
}

export default App;
