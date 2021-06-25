
import Style from "./LoginDetails.module.scss";
import Image from "./LoginLeft.PNG";
import LoginForm from "../../organisms/LoginForm/LoginForm"
const LoginDetails = () => {
  return (
    <div className={Style["login_card"]}>
      <div className={Style["loginDetails_cardLeft"]}>
        <img style={{ borderRadius: "1.25rem 0 0 1.25rem" }} src={Image}></img>
      </div>
      <div className={Style["loginDetails_cardRight"]}>
      <h1 style={{marginBottom:"0rem"}}>Welcome !!!</h1>
       <LoginForm/>
      </div>
    </div>
  );
};
export default LoginDetails;
