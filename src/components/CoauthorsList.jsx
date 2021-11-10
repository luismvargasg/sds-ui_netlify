import React from "react";

/* Utilities */
import { Link } from "react-router-dom";

/* UI Library Components */
import { Card, Table } from "antd";

/* UI Library Sub-components */
const { Column } = Table;

const CoauthorsList = ({ data, title, height = 422 }) => {
  /*   const type = history.location.pathname;

  if (type === "/app/institutions") {
    return (
      <Router history={history}>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
          <Card
            size="small"
            title="Lista de Coautorías"
            bodyStyle={{ padding: "10px" }}
            style={{ height: height }}
          >
            <Table
              rowKey="id"
              dataSource={data}
              scroll={{ y: height - 192 }}
              bordered={true}
              pagination={{ size: "small" }}
            >
              <Column
                title="Nombre"
                dataIndex={"name"}
                key={"id"}
                render={(name, record) => (
                  <Link
                    to={`/app/institutions?${APIKEY}&${DATA}&id=${record.id}`}
                    onClick={() =>
                      setCurrentURL(
                        `/app/institutions?${APIKEY}&${DATA}&id=${record.id}`
                      )
                    }
                  >
                    {name}
                  </Link>
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
        </Col>
      </Router>
    );
  } */

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
