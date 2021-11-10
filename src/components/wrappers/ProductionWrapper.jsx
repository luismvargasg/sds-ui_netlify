import React, { useState, useEffect } from "react";

/* Components */
import DocumentList from "../DocumentList";
import ErrorWarning from "../ErrorWarning";
import LoadingCard from "../LoadingCard";
import DocumentByType from "../DocumentByType";

/* Charts */
import PieChart from "../charts/PieChart";
import VennChart from "../charts/VennChart";

/* Utilities */
import { APIRequest } from "../../apis/api";

/* UI Library Components */
import { Col, Row, Tabs } from "antd";

/* UI Library Sub-components */
const { TabPane } = Tabs;

const ProductionWrapper = ({ URL }) => {
  const [pagination, setPagination] = useState({ max: 10, page: 1 });
  const [sort, setSort] = useState("citations");
  const [state, setUrl] = APIRequest(
    `${URL}&data=production&max=${pagination.max}&page=${pagination.page}&sort=${sort}`
  );
  const tools = { pagination, setPagination, sort, setSort, URL, setUrl };

  useEffect(() => {
    setUrl(
      `${URL}&data=production&max=${pagination.max}&page=${pagination.page}&sort=${sort}`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination, sort]);

  const tabMaker = (tabList) => {
    return (
      <Tabs defaultActiveKey="0" type="card" tabBarGutter={5}>
        {tabList.map((item, i) => (
          <TabPane tab={item} key={i}>
            <DocumentByType type={item} URL={URL} tools={tools} />
          </TabPane>
        ))}
      </Tabs>
    );
  };

  if (state.isError) {
    return <ErrorWarning />;
  }
  if (state.isLoading) {
    return <LoadingCard />;
  }
  return (
    <Row gutter={[15, 15]}>
      <Col xs={24} sm={24} md={12}>
        <PieChart data={state.data.open_access} title="Open Access" />
      </Col>
      <VennChart data={state.data.venn_source} />
      <Col span={24}>
        {state.data.types ? (
          tabMaker(state.data.types)
        ) : (
          <DocumentList data={state.data} tools={tools} />
        )}
      </Col>
    </Row>
  );
};

export default ProductionWrapper;
