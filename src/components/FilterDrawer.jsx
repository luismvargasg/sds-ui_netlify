import React, { useState, useEffect } from "react";

/* Components */
import FilterMultipleSelect from "./FilterMultipleSelect";
import YearsRangeFilter from "./YearsRangeFilter";

/* UI Library Components */
import { Drawer, Button } from "antd";

/* Icons */
import { FilterOutlined } from "@ant-design/icons";

/* Utilities */
import { useHistory } from "react-router-dom";

const FilterDrawer = ({ core }) => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [institutions, setInstitutions] = useState("");
  const [groups, setGroups] = useState("");
  const [years, setYears] = useState("");

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onClick = () => {
    const URL = new URLSearchParams(history.location.search);
    let filteredURL = `${history.location.pathname}?`;

    filteredURL += URL.has("data") ? `data=${URL.get("data")}` : "";
    filteredURL += URL.has("id") ? `id=${URL.get("id")}` : "";
    filteredURL += URL.has("keywords")
      ? `&keywords=${URL.get("keywords")}`
      : "";

    if (core.filters.institutions && institutions) {
      filteredURL += `&institution=${institutions}`;
    }
    if (core.filters.groups && groups) {
      filteredURL += `&group=${groups}`;
    }
    if (core.filters.start_year && years) {
      filteredURL += `&start_year=${years.start_year}&end_year=${years.end_year}`;
    }

    core.setURL(filteredURL);
    history.push(filteredURL);
    onClose();
  };

  useEffect(() => {
    core.setFilters(null);
    setInstitutions("");
    setGroups("");
    setYears("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [core.URL]);

  return (
    <>
      <Button
        size="large"
        icon={<FilterOutlined />}
        onClick={showDrawer}
        className="fixed-widget"
        type="primary"
      >
        Filtros
      </Button>
      <Drawer
        title="Filtros"
        placement={"left"}
        style={{ zIndex: 1002 }}
        onClose={onClose}
        visible={visible}
        footer={
          <>
            {/* <Button
              size="large"
              type="link"
              className="drawer--clean-button"
              onClick={cleanFilters}
            >
              Limpiar filtros
            </Button> */}
            <Button
              size="large"
              type="primary"
              onClick={onClick}
              disabled={groups || institutions || years ? false : true}
            >
              Aplicar Filtros
            </Button>
          </>
        }
        footerStyle={{ textAlign: "right" }}
      >
        {!core.filters ? "No hay filtros disponibles." : ""}
        {core.filters?.institutions && (
          <FilterMultipleSelect
            list={core.filters?.institutions}
            type="institutions"
            setFilter={setInstitutions}
          />
        )}
        {core.filters?.groups && (
          <FilterMultipleSelect
            list={core.filters?.groups}
            type="groups"
            setFilter={setGroups}
          />
        )}
        {core.filters?.start_year && (
          <YearsRangeFilter filters={core.filters} setYears={setYears} />
        )}
      </Drawer>
    </>
  );
};

export default FilterDrawer;
