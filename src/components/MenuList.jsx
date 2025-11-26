import { Menu } from "antd";
import {
  HomeOutlined,
  OrderedListOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  DollarOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function MenuList({ darkTheme }) {
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      defaultSelectedKeys={["1"]}
    >
      <Menu.Item key="1" icon={<HomeOutlined />}>
        Home
      </Menu.Item>

      <Menu.SubMenu key="2" icon={<OrderedListOutlined />} title="Tasks">
        <Menu.Item key="2-1">Task 1</Menu.Item>
        <Menu.Item key="2-2">Task 2</Menu.Item>

        <Menu.SubMenu key="2-3" title="Completed">
          <Menu.Item key="2-3-1">Today</Menu.Item>
          <Menu.Item key="2-3-2">Week</Menu.Item>
          <Menu.Item key="2-3-3">Month</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>

      <Menu.Item key="3" icon={<AppstoreOutlined />}>
        Activity
      </Menu.Item>

      <Menu.Item key="4" icon={<BarChartOutlined />}>
        Progress
      </Menu.Item>

      <Menu.Item key="5" icon={<DollarOutlined />}>
        Payment
      </Menu.Item>

      <Menu.Item key="6" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
    </Menu>
  );
}

export default MenuList;
