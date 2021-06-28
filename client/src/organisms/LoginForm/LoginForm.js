import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import SocialIcons from "../../molecules/Social-Icons/SocialIcons";
import Style from "./LoginForm.module.scss";
import { Link } from "react-router-dom";

const NormalLoginForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="normal_login"
      className={Style["login-form"]}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          style={{ borderRadius: "1rem" }}
          prefix={<UserOutlined className={Style["site-form-item-icon"]} />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          style={{ borderRadius: "1rem" }}
          prefix={<LockOutlined className={Style["site-form-item-icon"]} />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item className={Style["login-form-button__Login"]}>
        <a href="#">Forgot Password? </a>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "6rem", height: "3rem", fontSize: "1.25rem" }}
          className={Style["login-form-button"]}
        >
          Log in
        </Button>
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
            style={{ width: "6.25rem", height: "3rem", fontSize: "1.25rem" }}
            className={Style["login-form-button"]}
          >
            Sign Up
          </Button>
        </Link>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;
