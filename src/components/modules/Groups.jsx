import React, { useEffect } from "react";

/* Utilities */
import { APIRequest } from "../../apis/api";
import { useLocation } from "react-router";

/* Components */
import AuthorsTab from "../AuthorsTab";
import CitationsWrapper from "../wrappers/CitationsWrapper";
import CoauthorsWrapper from "../wrappers/CoauthorsWrapper";
import CommonTitleCard from "../CommonTitleCard";
import ErrorWarning from "../ErrorWarning";
import LoadingCard from "../LoadingCard";
import ProductionWrapper from "../wrappers/ProductionWrapper";
import TopicsWrapper from "../wrappers/TopicsWrapper";

/* UI Library Components */
import { Col, Row, Tabs } from "antd";

/* UI Library Sub-components */
const { TabPane } = Tabs;

const Groups = () => {
  const location = useLocation();
  let URL = location.pathname + location.search;
  const [state, setUrl] = APIRequest(`${URL}&data=info`);

  useEffect(() => {
    setUrl(`${URL}&data=info`);
  }, [setUrl, URL]);

  if (state.isError) {
    return <ErrorWarning />;
  } else if (state.isLoading) {
    return <LoadingCard />;
  }
  return (
    <Row gutter={[15, 15]}>
      <CommonTitleCard data={state.data.data} />
      <Col span={24}>
        <Tabs defaultActiveKey={"topics"} type="card" tabBarGutter={5}>
          <TabPane tab="Temas" key="topics">
            <TopicsWrapper />
          </TabPane>
          <TabPane tab="Producción" key="production" forceRender>
            <ProductionWrapper URL={URL} />
          </TabPane>
          <TabPane tab="Autores" key="authors">
            <AuthorsTab URL={URL} />
          </TabPane>
          <TabPane tab="Citaciones" key="citations" forceRender>
            <CitationsWrapper URL={URL} />
          </TabPane>
          <TabPane tab="Coautorías" key="coauthors" forceRender>
            <CoauthorsWrapper URL={URL} />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default Groups;
