import React, { useState } from "react";

/* UI Library Components */
import { Drawer, Button } from "antd";

/* Icons */
import { FilterOutlined } from "@ant-design/icons";

const FilterDrawer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        size="large"
        shape="circle"
        icon={<FilterOutlined />}
        onClick={showDrawer}
        className="fixed-widget"
        type="primary"
      />
      <Drawer
        title="Filtros"
        placement={"left"}
        //width={500}
        contentWrapperStyle={{ width: 500 }}
        //bodyStyle={{ width: 500 }}
        onClose={onClose}
        visible={visible}
        footer={
          <Button size="large" type="primary" onClick={onClose}>
            Aplicar Filtros
          </Button>
        }
        footerStyle={{ textAlign: "right" }}
      >
        <div style={{ width: "400px" }}>
          <p>Some contents...</p>
        </div>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
