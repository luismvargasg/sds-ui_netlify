import React, { useEffect } from 'react';

/* Utilities */
import { APIRequest } from '../../apis/api';
import { useLocation } from 'react-router';

/* Components */
import AuthorsTab from '../AuthorsTab';
import ErrorWarning from '../ErrorWarning';
import SubjectsTable from '../SubjectsTable';
import LoadingCard from '../LoadingCard';
import ProductionWrapper from '../wrappers/ProductionWrapper';
import SubjectsTitleCard from '../SubjectsTitleCard';

/* UI Library Components */
import { Col, Row, Tabs } from 'antd';

/* UI Library Sub-components */
const { TabPane } = Tabs;

const Subjects = ({ core }) => {
  const location = useLocation();
  let URL = location.pathname + location.search;
  const [state, setUrl] = APIRequest(`${URL}&data=info`);

  useEffect(() => {
    document.title = 'Temas | SALUDATA';
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
      <SubjectsTitleCard data={state.data.data} core={core} />
      <Col span={24}>
        <Tabs defaultActiveKey={'authors'} type="card" tabBarGutter={5}>
          <TabPane tab="Autores" key="authors">
            <AuthorsTab core={core} />
          </TabPane>
          <TabPane tab="Grupos" key="groups">
            <SubjectsTable core={core} type="groups" />
          </TabPane>
          <TabPane tab="Instituciones" key="institutions">
            <SubjectsTable core={core} type="institutions" />
          </TabPane>
          <TabPane tab="Producción" key="production">
            <ProductionWrapper core={core} />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default Subjects;
