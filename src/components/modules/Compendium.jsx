import React, { useEffect } from 'react';

/* Components */
import CompendiumTable from '../CompendiumTable';

/* UI Library Components */
import { Tabs } from 'antd';

/* UI Library Sub-components */
const { TabPane } = Tabs;

const Compendium = ({ core }) => {
  useEffect(() => {
    document.title = 'Capacidades científicas | SALUDATA';
  }, []);

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
    </Tabs>
  );
};

export default Compendium;
