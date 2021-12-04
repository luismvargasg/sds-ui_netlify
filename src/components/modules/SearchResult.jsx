import React, { useState, useEffect } from "react";

import { useHistory } from "react-router";

/* Components */
import ErrorWarning from "../ErrorWarning";
import LoadingCard from "../LoadingCard";
import ProductionResult from "../ProductionResult";
import SortSearchResults from "../SortSearchResults";

/* UI Library Components */
import { Avatar, Card, List, Space } from "antd";

/* Icons */
import {
  BankOutlined,
  TeamOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { CitationsIcon } from "../../media/icons/citations";

/* Utilities */
import { APIRequest } from "../../apis/api";
import { titles } from "../../utils/texts";
import { Link } from "react-router-dom";
const queryString = require("query-string");

const SearchResult = ({ setURL }) => {
  const history = useHistory();
  const URL = history.location.pathname + history.location.search;
  const parsed = queryString.parse(URL);
  const type = parsed["/app/search?data"];
  const [pagination, setPagination] = useState({ max: 10, page: 1 });
  const [sort, setSort] = useState("citations");
  const [state, setUrl] = APIRequest(
    `${URL}&max=${pagination.max}&page=${pagination.page}&sort=${sort}`
  );
  const tools = { sort, setSort };

  useEffect(() => {
    setPagination({ max: 10, page: 1 });
    setSort("citations");
  }, [URL]);

  useEffect(() => {
    setPagination({ max: 10, page: 1 });
  }, [sort]);

  useEffect(() => {
    setUrl(`${URL}&max=${pagination.max}&page=${pagination.page}&sort=${sort}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  const onPageChange = ({ page, pageSize }) => {
    setPagination({ page: page, max: pageSize });
    window.scrollTo(0, 0);
  };

  if (state.isError) {
    return <ErrorWarning />;
  } else if (state.isLoading) {
    return <LoadingCard />;
  }
  return type === "literature" ? (
    <ProductionResult data={state.data} URL={URL} />
  ) : (
    <Card
      headStyle={{ backgroundColor: "#003e65", color: "white" }}
      size="small"
      title={titles[parsed["/app/search?data"]]}
      extra={
        <div>
          <p className="white-text">
            {state.data.total_results}{" "}
            {state.data.total_results === 1 ? "resultado" : "resultados"}
          </p>
          <SortSearchResults tools={tools} key="1" />
        </div>
      }
    >
      <List
        itemLayout="vertical"
        size="large"
        dataSource={state.data.data}
        pagination={{
          size: "small",
          position: "bottom",
          total: state.data.total_results,
          onChange: (page, pageSize) =>
            onPageChange({
              page,
              pageSize,
            }),
          hideOnSinglePage: true,
          current: pagination.page,
          pageSize: pagination.max,
        }}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Space style={{ fontSize: 18 }}>
                {React.createElement(CalendarOutlined)}
                Publicaciones: {item.papers_count}
              </Space>,
              <Space style={{ fontSize: 18 }}>
                {React.createElement(CitationsIcon)}
                Citado: {item.citations_count}
              </Space>,
            ]}
          >
            <List.Item.Meta
              avatar={
                type === "institutions" ? (
                  <Avatar size={48} src={item.logo} />
                ) : (
                  <Avatar size={48}>
                    {item.full_name
                      ? item.full_name.charAt(0)
                      : item.name.charAt(0)}
                  </Avatar>
                )
              }
              title={
                <Link to={`/app/${parsed["/app/search?data"]}?id=${item.id}`}>
                  {item.full_name || item.name}
                </Link>
              }
              description={
                type !== "institutions" ? (
                  <>
                    {type === "authors" && item.affiliation?.group?.name ? (
                      <div>
                        <TeamOutlined />{" "}
                        <Link
                          style={{ fontSize: 12, textDecoration: "underline" }}
                          to={`/app/groups?id=${item.affiliation?.group?.id}`}
                        >
                          {item.affiliation?.group?.name}
                        </Link>
                      </div>
                    ) : (
                      ""
                    )}
                    {(item.affiliation?.name ||
                      item.affiliation?.institution?.name) && (
                      <div>
                        <BankOutlined />{" "}
                        <Link
                          style={{ fontSize: 12, textDecoration: "underline" }}
                          to={`/app/institutions?id=${
                            item.affiliation?.institution?.id ||
                            item.affiliation?.id
                          }`}
                        >
                          {item.affiliation.name ||
                            item.affiliation.institution.name}
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  ""
                )
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default SearchResult;
