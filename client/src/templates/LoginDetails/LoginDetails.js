
import Style from "./LoginDetails.module.scss";
import Image from "./LoginLeft.PNG";
import LoginForm from "../../organisms/LoginForm/LoginForm"
import { useState } from "react";
const LoginDetails = () => {
  const [status,setStatus]=useState(false)
  const changeWelcome=(val)=>{
    setStatus(val)
  }

  return (
    <div className={Style["login_card"]}>
      <div className={Style["loginDetails_cardLeft"]}>
        <img style={{ borderRadius: "1.25rem 0 0 1.25rem" }} src={Image} alt="Login"></img>
      </div>
      <div className={Style["loginDetails_cardRight"]}>
      {!status && <h1 style={{height:"4rem",textAlign:"center"}}>Welcome !!!</h1>}
      {status && <h1 style={{color:"darkred",fontWeight:"700",height:"4rem",textAlign:"center"}}>Don't Worry</h1>}
       <LoginForm changeWelcome={changeWelcome}/>
      </div>
    </div>
  );
};
export default LoginDetails;
