import { useState } from "react";
import DisplayUsers from "./components/DisplayUsers";
import UserRegistration from "./components/UserRegistration";

const App = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <>
      <main className="container">
        <div className="row justify-content-center">
          <button onClick={() => {
            setToggle(!toggle)
          }} className="displayButton">Display {!toggle ? "Users" : "Form"}</button>
          {toggle ? <DisplayUsers /> : <UserRegistration />}
          {/* <UserRegistration /> */}
        </div>
      </main>
    </>
  );
};

export default App;
