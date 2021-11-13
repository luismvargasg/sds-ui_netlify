import React from "react";

/* Utilities */
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

/* UI Library Components */
import { Card, Table } from "antd";

/* UI Library Sub-components */
const { Column } = Table;

const CoauthorsList = ({ data, title, height = 422 }) => {
  const type = useHistory();

  if (type.location.pathname === "/app/institutions") {
    return (
      <Card
        size="small"
        title={title}
        headStyle={{ backgroundColor: "#003e65", color: "white" }}
        bodyStyle={{ padding: "10px", height: height }}
      >
        <Table
          rowKey="id"
          dataSource={data}
          scroll={{ y: height - 150 }}
          bordered={true}
          pagination={{ size: "small" }}
        >
          <Column
            title="Nombre"
            dataIndex={"name"}
            key={"id"}
            render={(name, record) => (
              <Link to={`/app/institutions?&id=${record.id}`}>{name}</Link>
            )}
          />
          <Column
            title="Artículos compartidos"
            dataIndex="count"
            key="count"
            width={130}
          />
        </Table>
      </Card>
    );
  } else
    return (
      <Card
        size="small"
        title={title}
        headStyle={{ backgroundColor: "#003e65", color: "white" }}
        bodyStyle={{ padding: "10px", height: height }}
      >
        <Table
          rowKey="id"
          dataSource={data}
          scroll={{ y: height - 150 }}
          bordered={true}
          pagination={{ size: "small" }}
        >
          <Column
            title="Nombre"
            dataIndex={"full_name"}
            key={"id"}
            render={(name, record) => (
              <Link to={`/app/authors?&id=${record.id}`}>{name}</Link>
            )}
          />
          <Column
            title="Artículos compartidos"
            dataIndex="count"
            key="count"
            width={130}
          />
        </Table>
      </Card>
    );
};

export default CoauthorsList;
