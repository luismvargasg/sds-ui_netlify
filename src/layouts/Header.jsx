import React from 'react';

/* Components */
import SearchBar from '../components/SearchBar';

/* UI Library Components */
import { Button, Col, Layout, Modal, Row, Tooltip } from 'antd';

/* logotypes */
import logo_saludata_w from '../media/logo_saludata_w.svg';
import logo_sds_w from '../media/logo_sds_w.svg';

/* Icons */
import {
  HomeOutlined,
  InfoCircleOutlined,
  LineChartOutlined,
  BarChartOutlined,
  FileSearchOutlined,
} from '@ant-design/icons';

/* Utilities */
import { Link } from 'react-router-dom';

const Header = ({ core }) => {
  const showModal = () => {
    Modal.info({
      width: '800px',
      title: 'Acerca de este módulo',
      maskClosable: true,
      icon: null,
      okText: 'Cerrar',
      content: (
        <>
          <br />
          <p>
            El Módulo de Investigación en Salud reúne la producción científica
            realizada en Bogotá sobre temas de interés en salud y bienestar.
          </p>
          <p>
            La producción científica se refiere a los artículos, libros,
            capítulos de libros y otro tipo de documentos que hacen parte de los
            procesos de investigación desarrollados por instituciones académicas
            y científicas.
          </p>
          <p>
            Las bases de datos consideradas para el procesamiento de la
            información son: OpenAlex, Lens, OADOI de Unpaywall, DOAJ, la bases
            de datos abierta del Scienti del Ministerio de Ciencia, tecnología,
            innovación y competitividad. Todos los datos son abiertos.
          </p>
          <p>
            En la plataforma podrá encontrar la información organizada por
            autores, grupos de investigación, instituciones y temas de interés
            específicos o globales que están o se desarrollan en Bogotá.
          </p>
          <p>
            A través de las distintas opciones de búsqueda, la comunidad
            académica, y científica, los tomadores de decisiones, los
            profesionales de las entidades de salud y la ciudadanía, podrán
            acceder a información que permite hacer análisis en diferentes
            niveles: desde la construcción de estados del arte, estudios de
            caso, hasta el seguimiento a un tema específico que derive en nuevas
            investigaciones, desarrollos tecnológicos, farmacéuticos o de
            políticas públicas.
          </p>
          <p>
            El Módulo de Investigación en Salud hace parte del Observatorio de
            Bogotá SaluData.
          </p>
        </>
      ),
    });
  };

  return (
    <>
      <Layout.Header
        style={{
          padding: 0,
          position: 'sticky',
          top: 0,
          zIndex: 1001,
          height: 'auto',
          lineHeight: '56px',
          backgroundColor: '#009fe3',
          boxShadow:
            '0 5px 10px rgba(15, 15, 20, 0.25), 0 10px 20px rgba(0, 0, 0, 0.1)',
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
            xs={{ span: 24, order: 3 }}
            sm={{ span: 24, order: 3 }}
            lg={{ span: 8, order: 2 }}
            xl={{ span: 8, order: 2 }}
            xxl={{ span: 10, order: 2 }}
          >
            {!core.home ? <SearchBar core={core} /> : ''}
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
      <Col className="header--menu">
        <Row justify="center" align="middle">
          <Col className="margin-25">
            <Link to="/app">
              <HomeOutlined className="header__icon" />
              Inicio
            </Link>
          </Col>
          <Col className="margin-25">
            <Button
              type="link"
              style={{ color: 'white', padding: 0 }}
              onClick={() => showModal()}
              icon={<InfoCircleOutlined />}
            >
              Acerca de este módulo
            </Button>
          </Col>
          <Col className="margin-25">
            <Tooltip
              color={'gray'}
              title={
                <>
                  <p>
                    ¿Cuáles son los temas en los que se concentra la
                    investigación científica en salud de Bogotá?
                  </p>
                  <p>
                    Aquí podrá conocer los temas más frecuentes y su relación
                    con los planes y políticas públicas del distrito, y los
                    Objetivos de Desarrollo Sostenible. Use los filtros
                    disponibles para ver información específica.
                  </p>
                </>
              }
            >
              <Link to="/app/trends" onClick={() => core.setURL('/app/trends')}>
                <LineChartOutlined className="header__icon" />
                Tendencias
              </Link>
            </Tooltip>
          </Col>
          <Col className="margin-25">
            <Tooltip
              color={'gray'}
              title={
                <>
                  <p>
                    Conozca quiénes hacen investigación científica en el área de
                    la salud en la ciudad.
                  </p>
                  <p>
                    Aquí podrá conocer la producción científica de
                    instituciones, grupos y autores. Use los filtros disponibles
                    para ver información específica.
                  </p>
                </>
              }
            >
              <Link
                to="/app/compendium?data=info"
                onClick={() => core.setURL('/app/compendium?data=info')}
              >
                <BarChartOutlined className="header__icon" />
                Capacidades científicas
              </Link>
            </Tooltip>
          </Col>
          <Col className="margin-25">
            <Tooltip
              color={'gray'}
              title="Consulte las convocatorias locales, nacionales e internacionales que financian o apoyan proyectos de investigación en salud."
            >
              <Link to="/app/calls" onClick={() => core.setURL('/app/calls')}>
                <FileSearchOutlined className="header__icon" />
                Convocatorias
              </Link>
            </Tooltip>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Header;
