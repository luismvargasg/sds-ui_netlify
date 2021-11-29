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
    <>
      <Layout.Header
        style={{
          padding: 0,
          position: "sticky",
          top: 0,
          zIndex: 9999,
          height: "auto",
          backgroundColor: "#009fe3",
        }}
      >
        <Row justify="space-between" style={{ fontSize: 13 }}>
          <Col
            className="mobile--logo-left"
            xs={24}
            sm={10}
            lg={8}
            xl={7}
            xxl={6}
          >
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
            sm={{ span: 24, order: 3 }}
            lg={{ span: 8, order: 2 }}
            xl={{ span: 8, order: 2 }}
            xxl={{ span: 10, order: 2 }}
          >
            <SearchBar setURL={setURL} />
          </Col>
          <Col
            className="mobile--logo"
            xs={{ span: 24, order: 1 }}
            sm={{ span: 14, order: 2 }}
            lg={{ span: 8, order: 3 }}
            xl={{ span: 7, order: 3 }}
            xxl={{ span: 6, order: 3 }}
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
      <Row justify="center" className="header--menu">
        <Col className="margin-25">
          <Link to="/app/module1">Módulo 1</Link>
        </Col>
        <Col className="margin-25">
          <Link to="/app/module2">Módulo 2</Link>
        </Col>
        <Col className="margin-25">
          <Link to="/app/module3">Módulo 3</Link>
        </Col>
        <Col className="margin-25">
          <Link to="/app/module4">Módulo 4</Link>
        </Col>
      </Row>
    </>
  );
};

export default Header;
