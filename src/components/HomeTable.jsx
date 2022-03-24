import React from "react";

/* UI Library Components */
import { Table } from "antd";

const HomeTable = () => {
  const searchExamples = [
    {
      key: "0",
      search: "Tema",
      example:
        "Consulte la producción, autores, grupos e instituciones que investigan en un tema específico de salud.",
    },
    {
      key: "1",
      search: "Producto",
      example:
        "Consulte los diferentes tipos de productos de un tema o palabra clave.",
    },
    {
      key: "2",
      search: "Institución",
      example:
        "Puede encontrar la producción en investigación de una institución. Verá los temas, grupos, autores y coautores relacionados.",
    },
    {
      key: "3",
      search: "Grupo de investigación",
      example:
        "Puede buscar el nombre completo del grupo o una palabra clave. Verá los temas de trabajo, las publicaciones, citaciones, autores y coautores.",
    },
    {
      key: "4",
      search: "Autor",
      example:
        "Podrá encontrar los productos de un autor. Puede ver también los temas y las coautorías.",
    },
  ];

  return (
    <Table dataSource={searchExamples} pagination={false} bordered size="small">
      <Table.Column title="Buscar por" dataIndex="search" />
      <Table.Column title="Descripción" dataIndex="example" />
    </Table>
  );
};

export default HomeTable;
