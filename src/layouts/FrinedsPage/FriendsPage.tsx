import React from "react";
// import "./App.css";
import { Button, Layout, Menu, MenuProps, Modal } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";

const items: MenuProps["items"] = [
  "RollerSkates",
  "Drawing",
  "Coding",
  "Cardistry",
  "Card magic",
].map((label, index) => ({
  key: String(index + 1),
  label: label,
}));

const FriendsPage = () => {
  return (
    <div className="FriendsPage">
      <div className="container">
        Hobbies
        <ul>
          <li>RollerSkates</li>
          <li>Drawing</li>
          <li>Coding</li>
          <li>Cardistry</li>
          <li>Card magic</li>
        </ul>
        <Layout
          style={{
            padding: "24px 0",
            // background: colorBgContainer,
            // borderRadius: borderRadiusLG,
          }}
          hasSider
        >
          <Sider width={200}>
          {/* <Sider style={{ background: colorBgContainer }} width={200}> */}
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
              // items={items2}
            />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </div>
    </div>
  );
};

export default FriendsPage;
