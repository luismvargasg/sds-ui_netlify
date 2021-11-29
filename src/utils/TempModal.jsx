import React from "react";

/* Components */
import AuthorsListOnModal from "../components/AuthorsListOnModal";

/* UI Library Components */
import { Divider, Descriptions, Typography } from "antd";

/* UI Library Sub-components */
const { Text, Paragraph, Link, Title } = Typography;

const TempModal = () => {
  const [ellipsis] = React.useState(true);

  const data = {
    data: {
      id: "60862d73af03c0afa0345265",
      title:
        "Factores asociados con el tamizaje de cáncer de cuello uterino en mujeres de nivel socioeconómico medio y bajo en Bogotá, Colombia.",
      abstract:
        "Objetivo: en Colombia el cancer de cuello uterino (CaCu) es el segundo mas comun en las mujeres con una incidencia estandarizada de 21,5/100.000. En este estudio se examinaron el conocimiento y los factores percibidos asociados con el tamizaje de CaCu en mujeres de nivel socioeconomico bajo/ medio en Bogota, Colombia. Metodologia: 10 grupos focales segmentados por grupos de edad (18-33, 34-49 y 50-66). Dos investigadores realizaron analisis de contenido, identificando categorias emergentes. Resultados: participaron 81 mujeres entre 18 y 66 anos. Aunque se encontraron diferencias por grupos de edad, el inicio temprano de la actividad sexual, promiscuidad, infecciones vaginales, vph, genetica, abortos y falta de higiene, fueron identificados como los principales factores de riesgo para CaCu. Ellas reconocieron que esta enfermedad no siempre tiene sintomas, y que las citologias la detectan tempranamente. Sin embargo, mencionaron miedo a practicarse la citologia, incomodidad/dolor, pena, mala atencion, procrastinacion y miedo al diagnostico de cancer como las principales barreras para el tamizaje rutinario. Las mujeres recomendaron campanas educativas y mejorar el servicio como estrategias para motivarlas. Conclusion: las participantes reportaron conocimientos basicos acerca del CaCu y el tamizaje. Las acciones para facilitar el tamizaje deben ser multifaceticas y acordes con las barreras y facilitadores reportados en cada grupo etario.",
      source: {
        name: "Revista Facultad Nacional de Salud Pública",
        serials: {
          pissn: "0120386X",
          eissn: "22563334",
        },
      },
      year_published: 2012,
      language: "",
      volume: "30",
      issue: "1",
      authors: [
        {
          corresponding: false,
          name: "Isabel Cristina Garces Palacio",
          id: "5fd274be20a702b39cae346e",
          affiliations: [
            {
              name: "Universidad de Antioquia",
              id: "60120afa4749273de6161883",
            },
          ],
        },
        {
          corresponding: false,
          name: "Diana C. Rubio",
          id: "60cbdde187a94a48d56b1fac",
          affiliations: [
            {
              name: "Universidad de Antioquia",
              id: "60120afa4749273de6161883",
            },
          ],
        },
      ],
      open_access_status: "",
      citations_count: 3,
      external_ids: [
        {
          id: "188-102-286-834-516",
          source: "lens",
          url: "https://www.lens.org/lens/scholar/article/188-102-286-834-516",
        },
        {
          id: "0BNLkLWrw8MJ",
          source: "scholar",
          url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=info%3A0BNLkLWrw8MJ%3Ascholar.google.com",
        },
      ],
      external_urls: [],
    },
    filters: {},
  };

  const renderedExternalIDs = () => {
    return data.data.external_ids.map((item) => (
      <Descriptions.Item key={item.source} label={`${item.source}:`}>
        URL:{" "}
        <a href={item.url} target="_blank" rel="noreferrer">
          Abrir en nueva pestaña
        </a>
        <br />
        ID: <Text copyable>{item.id}</Text>
      </Descriptions.Item>
    ));
  };

  const renderedExternalURLs = () => {
    return data.data.external_urls.map((item) => (
      <Descriptions.Item key={item.source} label="Link externo:">
        <Link href={item.url} target="_blank" rel="noreferrer">
          {item.source}
        </Link>
      </Descriptions.Item>
    ));
  };

  return (
    <div>
      <Title level={5}>{data.data.title}</Title>
      <Text strong>Autores: </Text>
      <AuthorsListOnModal authors={data.data.authors} />
      <Divider style={{ margin: "15px 0" }} />
      <Text strong>Abstract</Text>
      <Paragraph
        ellipsis={
          ellipsis ? { rows: 3, expandable: true, symbol: "Más" } : false
        }
      >
        {data.data.abstract}
      </Paragraph>
      <Divider style={{ margin: "15px 0" }} />
      <Descriptions bordered column={{ lg: 3, md: 2, sm: 2, xs: 1 }}>
        <Descriptions.Item label="Revista:">
          {data.data.source.name}
        </Descriptions.Item>
        <Descriptions.Item label="pISSN:">
          <Text copyable>{data.data.source.serials.pissn}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="eISSN:">
          <Text copyable>{data.data.source.serials.eissn}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Publicado:">
          {data.data.year_published}
        </Descriptions.Item>
        <Descriptions.Item label="Volumen:">
          {data.data.volume}
        </Descriptions.Item>
        <Descriptions.Item label="Issue:">{data.data.issue}</Descriptions.Item>
        <Descriptions.Item label="Idioma:">
          {data.data.language}
        </Descriptions.Item>
        <Descriptions.Item label="Citaciones:">
          {data.data.citations_count}
        </Descriptions.Item>
        {renderedExternalIDs()}
        {renderedExternalURLs()}
      </Descriptions>
    </div>
  );
};

export default TempModal;
