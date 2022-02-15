import React from "react";

/* Components */
import CompendiumGroups from "../CompendiumGroups";
import CompendiumInstitutions from "../CompendiumInstitutions";

/* UI Library Components */
import { Tabs } from "antd";

/* UI Library Sub-components */
const { TabPane } = Tabs;

const Compendium = ({ core }) => {
  setTimeout(() => {
    core.setHome(false);
  }, 10);

  return (
    <Tabs defaultActiveKey="groups" type="card" tabBarGutter={5}>
      <TabPane tab="Grupos" key="groups">
        <CompendiumGroups />
      </TabPane>
      <TabPane tab="Instituciones" key="institutions">
        <CompendiumInstitutions />
      </TabPane>
    </Tabs>
  );
};

export default Compendium;
