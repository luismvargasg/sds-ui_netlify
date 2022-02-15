import React from "react";

/* UI Library Components */
import { Layout, Col, Row } from "antd";

/* Utilities */
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Layout.Footer id="footer">
      <Row gutter={[15, 15]} align="middle">
        <Col xs={24} md={12} xxl={6}>
          <div className="footer-container">
            <p>
              <b>Observatorio Distrital de Investigación en Salud</b>
            </p>
            <br />
            <p>
              <Link to="/app/manual" className="white--link">
                Manual de usuario
              </Link>
            </p>
            <p>
              <Link to="/app/about" className="white--link">
                Acerca de esta plataforma
              </Link>
            </p>
            <p>
              <Link to="/app/normatividad" className="white--link">
                Normatividad del sistema de investigación en salud
              </Link>
            </p>
            <br />
            <p>Versión: 0.1.0</p>
            <p>Última actualización: 15/02/2022</p>
            <p>Hecho en Colombia</p>
          </div>
        </Col>
        <Col xs={24} md={12} xxl={6}>
          <div className="footer-container">
            <p>
              <b>Observatorio de Salud</b>
            </p>
            <br />
            <p>Carrera 32 No. 12-81</p>
            <p>Conmutador (571)3649090 ext.9792</p>
            <p>E-mail: observatoriodesalud@saludcapital.gov.co</p>
            <p>Horario de atención:</p>
            <p>lunes a viernes 8:00 a.m. a 5:00 p.m.</p>
            <p>Bogotá-Colombia</p>
          </div>
        </Col>
        <Col xs={24} md={12} xxl={6}>
          <div className="footer-container">
            <p>
              <b>Alcaldía Mayor de Bogotá</b>
            </p>
            <br />
            <p>Carrera 8 No. 10-55</p>
            <p>Teléfono: (571) 381 3000</p>
            <p>Horario de atención al público:</p>
            <p>lunes a viernes 9:30 a.m. a 7:00 p.m.</p>
            <p>Bogotá-Colombia</p>
          </div>
        </Col>
        <Col xs={24} md={12} xxl={6}>
          <div className="footer-container">
            <p>
              <b>Aliados estratégicos</b>
            </p>
            <br />
            <p>
              <a
                href="http://www.saludcapital.gov.co/"
                target="_blank"
                rel="noreferrer"
                className="white--link"
              >
                Secretaría de Salud
              </a>
            </p>
            <p>
              <a
                href="https://www.ins.gov.co/"
                target="_blank"
                rel="noreferrer"
                className="white--link"
              >
                Instituto Nacional de Salud
              </a>
            </p>
            <p>
              <a
                href="https://www.ins.gov.co/Direcciones/ONS/Paginas/default.aspx"
                target="_blank"
                rel="noreferrer"
                className="white--link"
              >
                Observatorio Nacional de Salud
              </a>
            </p>
            <p>
              <a
                href="https://www.paho.org/hq/?lang=es"
                target="_blank"
                rel="noreferrer"
                className="white--link"
              >
                Organización Panamericana de la Salud
              </a>
            </p>
            <p>
              <a
                href="http://www.who.int/es"
                target="_blank"
                rel="noreferrer"
                className="white--link"
              >
                Organización Mundial de la Salud
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Layout.Footer>
  );
};

export default Footer;
