import React, { useEffect } from 'react';

/* Components */
import CompendiumTable from '../CompendiumTable';

/* UI Library Components */
import { Tabs } from 'antd';

/* Utilities */
import { APIRequest } from '../../apis/api';
/* import { useLocation } from 'react-router-dom'; */

/* UI Library Sub-components */
const { TabPane } = Tabs;

const Compendium = ({ core }) => {
  /*  const location = useLocation(); */
  /* let URL = location.pathname; */
  const [state] = APIRequest(core.URL);

  /*  useEffect(() => {
    setUrl(`${URL}?data=info`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [core.URL]); */

  useEffect(() => {
    document.title = 'Capacidades científicas | SALUDATA';
  }, []);

  useEffect(() => {
    core.setFilters(state.data.filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  setTimeout(() => {
    core.setHome(false);
  }, 10);

  return (
    <Tabs defaultActiveKey="groups" type="card" tabBarGutter={5}>
      <TabPane tab="Grupos" key="groups">
        <CompendiumTable core={core} type="groups" />
      </TabPane>
      <TabPane tab="Instituciones" key="institutions">
        <CompendiumTable core={core} type="institutions" />
      </TabPane>
      <TabPane tab="Temas" key="subjects">
        <CompendiumTable core={core} type="subjects" />
      </TabPane>
    </Tabs>
  );
};

export default Compendium;
