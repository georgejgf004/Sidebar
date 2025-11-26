import "./App.css";
import { Layout, theme, Button } from "antd";
import Logo from "./components/Logo.jsx";
import MenuList from "./components/MenuList.jsx";
import { useState } from "react";
import ToggleThemeButton from "./components/ToggleThemeButton.jsx";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);

  // Toggle theme (light / dark)
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* SIDEBAR */}
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? "dark" : "light"}
        className="sidebar"
      >
        <Logo />

        {/* MENU */}
        <MenuList darkTheme={darkTheme} />

        {/* THEME TOGGLE BUTTON */}
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>

      {/* MAIN AREA */}
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            className="toggle"
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        </Header>

        <Content style={{ margin: "16px" }}>Hello</Content>
      </Layout>
    </Layout>
  );
}

export default App;
