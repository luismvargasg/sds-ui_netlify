import React, { useEffect } from 'react';

/* Components */
import CompendiumTable from '../CompendiumTable';

/* UI Library Components */
import { Tabs } from 'antd';

/* Utilities */
import { APIRequest } from '../../apis/api';
import { useLocation } from 'react-router-dom';
import AuthorsTabOnCompendium from '../AuthorsTabOnCompendium';

/* UI Library Sub-components */
const { TabPane } = Tabs;

const Compendium = ({ core }) => {
  const location = useLocation();
  let URL = location.pathname + location.search;
  const [state, setUrl] = APIRequest(URL);

  useEffect(() => {
    document.title = 'Capacidades científicas | SALUDATA';
  }, []);

  useEffect(() => {
    setUrl(URL);
    core.setFilters(state.data.filters);
    return () => {
      core.setFilters(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [URL, state]);

  return (
    <Tabs defaultActiveKey="authors" type="card" tabBarGutter={5}>
      <TabPane tab="Autores" key="authors">
        <AuthorsTabOnCompendium />
      </TabPane>
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
