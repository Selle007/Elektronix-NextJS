'use client'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];
const NavDropdown = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space className="text-black hover:text-secondary">
        Products
      </Space>
    </a>
  </Dropdown>
);
export default NavDropdown;