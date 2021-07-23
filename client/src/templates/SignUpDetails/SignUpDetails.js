
import Style from "./SignUpDetails.module.scss";
import SignUpForm from "../../organisms/SignUpForm/SignUpForm"
import Image from "./SignUpLeft.PNG";
const SignUpDetails = () => {
  return (
    <div className={Style["SignUp__Card"]}>
      <div className={Style["SignUpDetails_cardLeft"]}>
        <img style={{ borderRadius: "1.25rem 0 0 1.25rem", height:"31.25rem" }} src={Image} alt="signup"></img>
      </div>
      <div className={Style["SignUpDetails_cardRight"]}>
          <h1>Get Started !!!</h1>
          <SignUpForm />
      </div>
    </div>
  );
};
export default SignUpDetails;
