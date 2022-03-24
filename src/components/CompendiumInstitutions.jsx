import React from "react";

/* Components */
import ErrorWarning from "./ErrorWarning";
import LoadingCard from "./LoadingCard";
import TopEntityCard from "./TopEntityCard";

/* UI Library Components */
import { Row, Col, Divider } from "antd";

/* Utilities */
import { APIRequest } from "../apis/api";
import { useLocation } from "react-router";
//import { Link } from "react-router-dom";

/* Charts */
//import TinyLineChart from "./charts/TinyLineChart";
//import TinyWordCloudChart from "./charts/TinyWordCloudChart";
import GroupedColumnChart from "./charts/GroupedColumnChart";

/* UI Library Sub-components */
//const { Column } = Table;

const CompendiumInstitutions = () => {
  const location = useLocation();
  let URL = location.pathname;
  const [state] = APIRequest(`${URL}?data=institutions&limit=6`);

  if (state.isError) {
    return <ErrorWarning />;
  } else if (state.isLoading) {
    return <LoadingCard />;
  }
  return (
    <>
      <GroupedColumnChart data={state.data.data.citations_by_year} />
      <Row gutter={[15, 15]}>
        <Divider />
        {state.data.data.citations_subjects.map((entity) => (
          <Col span={8}>
            <TopEntityCard data={entity} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CompendiumInstitutions;
