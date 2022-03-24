import React, { useEffect } from "react";

/* Utilities */
import { APIRequest } from "../../apis/api";
import { useLocation } from "react-router";

/* Components */
import AuthorsTab from "../AuthorsTab";
import ErrorWarning from "../ErrorWarning";
import GroupsTab from "../GroupsTab";
import InstitutionsTab from "../InstitutionsTab";
import LoadingCard from "../LoadingCard";
import ProductionWrapper from "../wrappers/ProductionWrapper";
import PoliciesTitleCard from "../PoliciesTitleCard";
import SubjectsWrapper from "../wrappers/SubjectsWrapper";

/* UI Library Components */
import { Col, Row, Tabs } from "antd";

/* UI Library Sub-components */
const { TabPane } = Tabs;

const Policies = ({ core }) => {
  const location = useLocation();
  let URL = location.pathname + location.search;
  const [state, setUrl] = APIRequest(`${URL}&data=info`);

  useEffect(() => {
    document.title = "Políticas | SALUDATA";
  }, []);

  useEffect(() => {
    setUrl(`${URL}&data=info`);
  }, [setUrl, URL]);

  if (state.isError) {
    return <ErrorWarning />;
  } else if (state.isLoading) {
    return <LoadingCard />;
  }
  setTimeout(() => {
    core.setFilters(state.data.filters);
    core.setHome(false);
  }, 10);
  return (
    <Row gutter={[15, 15]}>
      <PoliciesTitleCard data={state.data.data} core={core} />
      <Col span={24}>
        <Tabs defaultActiveKey={"topics"} type="card" tabBarGutter={5}>
          <TabPane tab="Temas" key="topics">
            <SubjectsWrapper core={core} />
          </TabPane>
          <TabPane tab="Autores" key="authors">
            <AuthorsTab core={core} />
          </TabPane>
          <TabPane tab="Grupos" key="groups" forceRender>
            <GroupsTab core={core} />
          </TabPane>
          <TabPane tab="Instituciones" key="institutions" forceRender>
            <InstitutionsTab core={core} />
          </TabPane>
          <TabPane tab="Producción" key="production" forceRender>
            <ProductionWrapper core={core} />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default Policies;
