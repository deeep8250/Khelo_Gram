import CreateAc from "./CreateAc";
import SignIn from "./SignIn";
import image from "../assets/image.png";
import SwitchInLoginAndSignUp from "./SwitchInLoginAndSignUp";
import { useState } from "react";

<img src={image} />;

const Login = () => {
  const [click, SetClick] = useState("signin");
  return (
    <>
      <div className={`${click==="signin" ? "h-[50%]" : "h-[80%]"} w-[80%] bg-white flex flex-col rounded-3xl mt-[30%]`}>
       <SwitchInLoginAndSignUp  click={click} SetClick={SetClick}/>
       {click==="signin" ? <SignIn/> : <CreateAc/>}
      </div>
    </>
  );
};

export default Login;
