import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, Space } from "antd";
import "../css/Login.css";
import { getAccount, login } from "../apis/AccountApi";
import { Navigate, useNavigate } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
};

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accesstoken");

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    try {
      const response = await login(values.username, values.password);
      if (response.data.token) {
        localStorage.setItem("accesstoken", response.data.token);
        localStorage.getItem("accesstoken");
        navigate("/admin/account");
      }
    } catch (err) {}
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  // useEffect(() => {
  //   const getAllAccount = async () => {
  //     try {
  //       const res = await getAccount();
  //       console.log(res);
  //     } catch (error) {

  //     }
  //   }
  //   getAllAccount()
  // }, [])

  return token ? (
    <Navigate to={"admin/account"} />
  ) : (
    <>
      <h1 style={{ marginLeft: "600px" }}>Login</h1>
      <div className="login1">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign Up
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
