import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button
} from "antd";
import Style from "./SignUpForm.module.scss";


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
  const [form] = Form.useForm();
    
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
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
        <Input className={Style["SignUpInput"]} placeholder="Email Address" />
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
        <Input className={Style["SignUpInput"]} placeholder="Username" />
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
        >
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};
export default RegistrationForm;
