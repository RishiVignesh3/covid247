import { useState,useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import SocialIcons from "../../molecules/Social-Icons/SocialIcons";
import Style from "./LoginForm.module.scss";
import { Link } from "react-router-dom";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

const login_Check = gql`
  query loginCheck($email: String!, $password: String!) {
    loginCheck(email: $email, password: $password)
  }
`;
const change_Password = gql`
  mutation changePassword($email: String!, $password: String!) {
    changePassword(email: $email, password: $password) 
  }
`;
let dataCheck;
const NormalLoginForm = (props) => {

  let history = useHistory();
  const logged = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgot, setForgot] = useState("");



  const [Query, { data }] = useLazyQuery(login_Check);
  const [onApply] = useMutation(change_Password);

  useEffect(() => {
    Query({ variables: { email, password } });
  }, [email, password, Query]);


  const Login = () => {
    Query({ variables: { email, password} });
   
  if (data !== undefined) {
    dataCheck = data.loginCheck;
  }
  };

  const changePasswordHandler = () => {
    if (email.length !== 0 && password.length !== 0) {
      onApply({
        variables: { email, password },
      });
      setForgot("remember");
      setEmail("hi");
      setPassword("")
      props.changeWelcome(false);
    }
   
    
  };

  const passFunction = (e) => {
    setPassword(e.target.value);
  };

  const mailFunction = (e) => {
    setEmail(e.target.value);
  };
  const forgotFunction = () => {
    setForgot("forgot");
    props.changeWelcome(true);
   
  };

  const onFinish = () => {
    if (dataCheck === "ok") {
      dispatch({ type: "LOGGED", login: !logged });
      history.push("/");
    }
  };

  const formitem = () => {
    if (forgot !== "forgot") {
      return (
        <Fragment>
          <Form.Item
          // rules={[
          //   {
          //     required: true,
          //     message: "Enter A Email-ID",
          //   },
          // ]}
          >
            <p className={Style["error"]}>
              {dataCheck !== "ok" ? dataCheck : ""}
            </p>
            <Input
              style={{ borderRadius: "1rem" }}
              prefix={<UserOutlined className={Style["site-form-item-icon"]} />}
              onChange={mailFunction}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Enter Your Password",
              },
            ]}
          >
            <Input
              style={{ borderRadius: "1rem" }}
              prefix={<LockOutlined className={Style["site-form-item-icon"]} />}
              type="password"
              placeholder="Password"
              onChange={passFunction}
            />
          </Form.Item>

          <Form.Item className={Style["login-form-button__Login"]}>
            
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "9rem", height: "3rem", fontSize: "1.25rem" }}
              className={Style["login-form-button"]}
              onClick={Login}
            >
              Log in
            </Button>
            <p onClick={forgotFunction}>Forgot Password?</p>
          </Form.Item>
          <Form.Item>
            <SocialIcons />
          </Form.Item>
          <Form.Item className={Style["login-form-button__Signup"]}>
            <Link to="/SignUp">
              {" "}
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "9.25rem",
                  height: "3rem",
                  fontSize: "1.25rem",
                }}
                className={Style["login-form-button"]}
              >
                Sign Up
              </Button>
            </Link>
          </Form.Item>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Form.Item
          // rules={[
          //   {
          //     required: true,
          //     message: "Enter A Email-ID",
          //   },
          // ]}
          >
            <p className={Style["error"]}>
              {dataCheck !== "ok" ? dataCheck : ""}
            </p>
            <Input
              style={{ borderRadius: "1rem" }}
              prefix={<UserOutlined className={Style["site-form-item-icon"]} />}
              onChange={mailFunction}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Enter Your Password",
              },
            ]}
          >
            <Input
              style={{ borderRadius: "1rem" }}
              prefix={<LockOutlined className={Style["site-form-item-icon"]} />}
              type="password"
              placeholder="Password"
              onChange={passFunction}
            />
          </Form.Item>
          <Form.Item className={Style["login-form-button__Forgot"]}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "12.25rem", height: "3rem", fontSize: "1.25rem" }}
              className={Style["login-form-button"]}
              onClick={changePasswordHandler}
            >
              Change Password
            </Button>
          </Form.Item>
        </Fragment>
      );
    }
  };

  return (
    <div className={Style["form"]}>
    <Form
      name="normal_login"
      className={Style["login-form"]}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      {formitem}
    </Form>
    </div>
  );
};

export default NormalLoginForm;
