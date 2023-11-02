import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input, Space } from 'antd';
import '../css/Login.css';
import { getAccount, login } from "../apis/UserApi";
import { Navigate, useNavigate } from 'react-router-dom';


type FieldType = {
  username?: string;
  password?: string;
};

const LoginPage: React.FC = () => {

  const navigate = useNavigate()
  const token = localStorage.getItem("access-token");
  const onFinish = async (values: any) => {
    console.log('Success:', values); 
    try{ 
      const response = await login(values.username, values.password);
      localStorage.setItem('access-token', response.data.token);
      // localStorage.getItem("access-token", response.data.token);
      navigate("/admin/account");
    } catch(err){}
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
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
     <Navigate to={"/admin/account"}/> 
     ):(
    <div className='login1'>
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
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="submit">
              Sign Up
            </Button>
          </Space>
        </Form.Item>
    
      </Form>
    </div>
  )
};

export default LoginPage;