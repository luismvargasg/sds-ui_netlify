import React from "react";

/* Components */
import ErrorWarning from "./ErrorWarning";
import LoadingCard from "./LoadingCard";

/* UI Library Components */
import { Divider, Table } from "antd";

/* Utilities */
import { APIRequest } from "../apis/api";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

/* Charts */
import TinyLineChart from "./charts/TinyLineChart";
import TinyWordCloudChart from "./charts/TinyWordCloudChart";

/* UI Library Sub-components */
const { Column } = Table;

const CompendiumGroups = () => {
  const location = useLocation();
  let URL = location.pathname;
  const [state] = APIRequest(`${URL}?data=groups&limit=5`);

  if (state.isError) {
    return <ErrorWarning />;
  } else if (state.isLoading) {
    return <LoadingCard />;
  }
  return (
    <>
      <Table
        size="small"
        dataSource={state.data.data.products_by_year}
        bordered
        pagination={false}
      >
        <Column
          title="Grupo"
          render={(item) => (
            <Link to={`/app/groups?id=${item.id}`}>{item.name}</Link>
          )}
          rowSelection={{ onChange: (a) => console.log(a) }}
        />
        <Column
          title="Afiliación"
          dataIndex={"affiliations"}
          render={(item) => (
            <Link to={`/app/institutions?id=${item.institution.id}`}>
              {item.institution.name}
            </Link>
          )}
        />
        <Column title="Productos totales" dataIndex={"products_count"} />
        <Column title="Citas totales" dataIndex={"citations_count"} />
        <Column
          title="Productos por año"
          dataIndex={"products_by_year"}
          render={(item) => <TinyLineChart data={item} />}
          width={"30%"}
        />
        <Column
          title="Temas"
          dataIndex={"subjects"}
          render={(item) => <TinyWordCloudChart data={item} />}
          width={"30%"}
        />
      </Table>
      <Divider />
      <Table
        size="small"
        dataSource={state.data.data.citations_by_year}
        bordered
        pagination={false}
      >
        <Column
          title="Grupo"
          render={(item) => (
            <Link to={`/app/groups?id=${item.id}`}>{item.name}</Link>
          )}
          rowSelection={{ onChange: (a) => console.log(a) }}
        />
        <Column
          title="Afiliación"
          dataIndex={"affiliations"}
          render={(item) => (
            <Link to={`/app/institutions?id=${item.institution.id}`}>
              {item.institution.name}
            </Link>
          )}
        />
        <Column title="Citas totales" dataIndex={"citations_count"} />
        <Column title="Productos totales" dataIndex={"products_count"} />
        <Column
          title="Productos por año"
          dataIndex={"citations_by_year"}
          render={(item) => <TinyLineChart data={item} />}
          width={"30%"}
        />
        <Column
          title="Temas"
          dataIndex={"subjects"}
          render={(item) => <TinyWordCloudChart data={item} />}
          width={"30%"}
        />
      </Table>
    </>
  );
};

export default CompendiumGroups;
