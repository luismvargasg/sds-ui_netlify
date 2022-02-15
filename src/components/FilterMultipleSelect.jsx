import React from "react";

/* UI Library Components */
import { Select } from "antd";

const FilterMultipleSelect = ({ list, type, setFilter }) => {
  const placeholder = { institutions: "Instituciones", groups: "Grupos" };

  const onChange = (e) => {
    const countriesList = e.join(" ");
    setFilter(countriesList);
  };

  if (list) {
    const options = list.map((item) => {
      return { label: item.name, value: item.id };
    });
    return (
      <>
        <p className="filter--title">Filtrar por {placeholder[type]}:</p>
        <Select
          mode="multiple"
          //allowClear
          placeholder={"Selecciona uno o varios"}
          options={options}
          optionFilterProp="label"
          className="filter--container"
          onChange={onChange}
        />
      </>
    );
  }
  return "";
};

export default FilterMultipleSelect;
