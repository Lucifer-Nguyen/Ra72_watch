import React from "react";
import { ShopOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { Button } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("accesstoken");
    navigate("/");
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: React.createElement(UserOutlined),
      label: "Account Manager",
      onClick: () => {
        navigate("/admin/account");
      },
    },
    {
      key: "2",
      icon: React.createElement(ShopOutlined),
      label: "Product manager",
      onClick: () => {
        navigate("/admin/product");
      },
    },
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          {/* <Button type='primary'  onClick={()=>{navigate('/')}} > Home</Button> */}

          <Button type="primary" danger onClick={handleLogOut}>
            {" "}
            Log out
          </Button>
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Created by Lucifer</Footer> */}
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
