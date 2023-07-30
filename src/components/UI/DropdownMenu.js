import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import { useRouter } from "next/router";
import { useGetCategoriesQuery } from "@/redux/api/api";

const DropdownMenu = ({data}) => {




  const router = useRouter();
  const handleMenuClick = (e) => {
    // router.push(`/${e.item.props.path}`)
    router.push(`/category/${e.item.props.path}`);
  };
  
  const menuProps = {
    items:data,
    onClick: handleMenuClick,
  };
  return (
    <Space wrap>
      <Dropdown menu={menuProps}>
        <Button>
          <Space>
            Category
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </Space>
  );
};
export default DropdownMenu;
