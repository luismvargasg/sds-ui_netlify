import React, { useState } from "react";

/* Utilities */
import { useHistory } from "react-router";

/* UI Components */
import { Select, Input } from "antd";

const OPTIONS = [
  {
    label: "Autor",
    value: "authors",
    key: "authors",
  },
  {
    label: "Grupo",
    value: "groups",
    key: "groups",
  },
  {
    label: "Institución",
    value: "institutions",
    key: "institutions",
  },
  {
    label: "Producto",
    value: "production",
    key: "production",
  },
  {
    label: "Tema",
    value: "topic",
    key: "topic",
  },
];

const BASEURL = "/app/search";

const SearchBar = () => {
  let history = useHistory();
  const [selected, setSelected] = useState(OPTIONS[0]);

  const searchRequest = (input) => {
    history.push(
      `${BASEURL}?data=${selected.value}&max=10&page=1`.concat(
        input ? `&keywords=${input}` : ""
      )
    );
  };

  return (
    <Input.Search
      style={{ verticalAlign: "middle", padding: "0 5px" }}
      addonBefore={
        <Select
          options={OPTIONS}
          labelInValue="true"
          defaultValue={OPTIONS[0]}
          onSelect={setSelected}
          dropdownMatchSelectWidth={100}
        />
      }
      placeholder={"Búsqueda por palabra clave"}
      onSearch={(input) => searchRequest(input)}
      enterButton
      size="large"
    />
  );
};

export default SearchBar;
