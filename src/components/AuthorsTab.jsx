import React from "react";

/* UI Components Library */
import { Card, List, Typography, Space, Avatar } from "antd";

/* Icons */
import { CitationsIcon } from "../media/icons/citations";
import { CalendarOutlined, BankOutlined } from "@ant-design/icons";

/* UI Library Sub-components */
const { Link } = Typography;

const AuthorsTab = ({ data }) => {
  return (
    <Card
      headStyle={{ backgroundColor: "#003e65", color: "white" }}
      size="small"
      title="Autores"
    >
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Space style={{ fontSize: 18 }}>
                {React.createElement(CalendarOutlined)}
                Publicaciones: {""}
              </Space>,
              <Space style={{ fontSize: 18 }}>
                {React.createElement(CitationsIcon)}
                Citado: {""}
              </Space>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar>{item.full_name.charAt(0)}</Avatar>}
              title={
                <Link
                  style={{ fontSize: 15, textDecoration: "underline" }}
                  href={`/app/authors?id=${item.id}`}
                >
                  {item.full_name}
                </Link>
              }
              description={
                <>
                  <BankOutlined />{" "}
                  <Link
                    style={{ fontSize: 12, textDecoration: "underline" }}
                    to={""}
                  >
                    Nombre de la Institución
                  </Link>
                </>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default AuthorsTab;
