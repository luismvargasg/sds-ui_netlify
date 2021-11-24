import React from "react";

/* Components */
import SearchBar from "../components/SearchBar";

/* UI Library Components */
import { Col, Layout, Row } from "antd";

/* logotypes */
import logo_obs_salud from "../media/logo_obs_salud.svg";
import logo_saludata_w from "../media/logo_saludata_w.svg";
import logo_sds_w from "../media/logo_sds_w.svg";

/* Utilities */
import { Link } from "react-router-dom";

const Header = ({ setURL }) => {
  return (
    <Layout.Header
      style={{
        padding: 0,
        position: "sticky",
        top: 0,
        zIndex: 999,
        height: "auto",
        backgroundColor: "#009fe3",
      }}
    >
      <Row style={{ textAlign: "center", fontSize: 13 }}>
        <Col xs={24} sm={6} xl={4} xxl={3}>
          <Link to="/app">
            <img
              src={logo_obs_salud}
              alt="Logotipo Observartorio Distrital"
              className="header__logo"
            />
          </Link>
        </Col>
        <Col
          xs={{ span: 24, order: 3 }}
          sm={{ span: 10, order: 2 }}
          xl={{ span: 10, order: 2, offset: 2 }}
          xxl={{ span: 10, order: 2, offset: 3 }}
        >
          <SearchBar setURL={setURL} />
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          sm={{ span: 4, order: 3 }}
          xl={{ span: 4, order: 3 }}
          xxl={{ span: 3, order: 3, offset: 2 }}
        >
          <a
            href="https://saludata.saludcapital.gov.co/osb/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={logo_saludata_w}
              alt="Logotipo Saludata"
              className="header__logo"
            />
          </a>
        </Col>
        <Col
          xs={{ span: 12, order: 2 }}
          sm={{ span: 4, order: 4 }}
          xl={{ span: 4, order: 4 }}
          xxl={{ span: 3, order: 4 }}
        >
          <a
            href="http://www.saludcapital.gov.co/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={logo_sds_w}
              alt="Logotipo Secretaría de Salud de Bogotá"
              className="header__logo"
            />
          </a>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Header;
