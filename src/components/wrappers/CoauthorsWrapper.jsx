import React from "react";

/* Utilities */
import { APIRequest } from "../../apis/api";

/* Components */
import ErrorWarning from "../ErrorWarning";
import LoadingCard from "../LoadingCard";
import CoauthorsList from "../CoauthorsList";

/* Charts */
import MapChart from "../charts/MapChart";
import GraphChart from "../charts/GraphChart";

/* UI Library Components */
import { Col, Row } from "antd";

const CoauthorsWrapper = ({ URL }) => {
  const [state] = APIRequest(`${URL}&data=coauthors`);

  if (state.isError) {
    return <ErrorWarning />;
  }
  if (state.isLoading) {
    return <LoadingCard />;
  }
  return (
    <Row gutter={[15, 15]}>
      <Col xs={24} md={8}>
        <CoauthorsList
          data={state.data.data.coauthors}
          title="Lista de Coautores"
          height={600}
        />
      </Col>
      <Col xs={24} md={16}>
        <MapChart
          data={state.data.geo}
          title="Alcance Geográfico"
          height={600}
        />
      </Col>
      <Col span={24}>
        <GraphChart
          data={state.data.data.coauthors_network}
          title="Red de coautoría - Autores"
          type="authors"
        />
      </Col>
    </Row>
  );
};

export default CoauthorsWrapper;
