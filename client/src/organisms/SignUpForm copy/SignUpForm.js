import React, { useState} from "react";
import {useHistory} from "react-router-dom"
import { Form, Input, Button } from "antd";
import Style from "./SignUpForm.module.scss";
import { gql, useMutation } from "@apollo/client";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {

  const history= useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const GET_POST = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      email
    }
  }
`;
  const [onApply] = useMutation(GET_POST);

  const SignUp = () => {
    if(username.length!==0 && email.length!==0 && password.length!==0){
      onApply({
        variables: { username, email, password },
      });
    }
  };
  
  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const usernameChange = (e) => {
    setUsername(e.target.value);
  };

  const [form] = Form.useForm();


  const onFinish = (values) => {
    history.push("/Login")
  };



  

  return (
    <Form
      className={Style["SignUpForm"]}
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      scrollToFirstError
    >
      <Form.Item
        name="username"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your username!",
            whitespace: true,
          },
        ]}
      >
        <Input
          className={Style["SignUpInput"]}
          placeholder="Username"
          onChange={usernameChange}
        />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input
          className={Style["SignUpInput"]}
          placeholder="Email Address"
          onChange={emailChange}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          className={Style["SignUpInput"]}
          placeholder="Password"
          onChange={passwordChange}
        />
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          className={Style["SignUpInput"]}
          placeholder="Re-Type Password"
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button
          className={Style["SignUpForm__Button"]}
          type="primary"
          htmlType="submit"
          onClick={SignUp}
        >
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};
export default RegistrationForm;
