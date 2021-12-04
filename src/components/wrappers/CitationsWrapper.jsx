import React from "react";

/* Utilities */
import { APIRequest } from "../../apis/api";

/* Components */
import ErrorWarning from "../ErrorWarning";
import LoadingCard from "../LoadingCard";

/* UI Library Components */
import { Col, Row } from "antd";

/* Charts */
import ColumnChart from "../charts/ColumnChart";
import MapChart from "../charts/MapChart";

const CitationsWrapper = ({ URL }) => {
  const [state] = APIRequest(`${URL}&data=citations`);

  if (state.isError) {
    return <ErrorWarning />;
  }
  if (state.isLoading) {
    return <LoadingCard />;
  }
  return (
    <Row gutter={[15, 15]}>
      <Col span={24}>
        <ColumnChart
          data={state.data.data.yearly_citations}
          title="Citas"
          total={state.data.data.citations}
        />
      </Col>
      <Col span={24}>
        <MapChart
          data={state.data.data.geo}
          title="Alcance geográfico de citas"
        />
      </Col>
    </Row>
  );
};

export default CitationsWrapper;
