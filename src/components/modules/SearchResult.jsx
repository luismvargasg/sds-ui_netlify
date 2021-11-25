import React, { useState, useEffect } from "react";

/* Components */
import ErrorWarning from "../ErrorWarning";
import LoadingCard from "../LoadingCard";
import ProductionResult from "../ProductionResult";

/* UI Library Components */
import { Avatar, Card, List } from "antd";

/* Icons */
import { BankOutlined, TeamOutlined } from "@ant-design/icons";

/* Utilities */
import { APIRequest } from "../../apis/api";
import { titles } from "../../utils/texts";
import { Link } from "react-router-dom";
const queryString = require("query-string");

const SearchResult = ({ URL }) => {
  const parsed = queryString.parse(URL);
  const type = parsed["/app/search?data"];
  const [pagination, setPagination] = useState({ max: 10, page: 1 });
  const [state, setUrl] = APIRequest(
    `${URL}&max=${pagination.max}&page=${pagination.page}`
  );

  useEffect(() => {
    setPagination({ max: 10, page: 1 });
  }, [URL]);

  useEffect(() => {
    setUrl(`${URL}&max=${pagination.max}&page=${pagination.page}`);
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
        <p className="white-text">
          {state.data.total_results}{" "}
          {state.data.total_results === 1 ? "resultado" : "resultados"}
        </p>
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
          <List.Item>
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
                    {/* <div>
                    <TeamOutlined />{" "}
                    <Link
                      style={{ fontSize: 12, textDecoration: "underline" }}
                      href={`/app/groups?id=${item.affiliation.group.id}`}
                    >
                      {item.affiliation.group.name}
                    </Link>
                  </div> */}
                    {item.affiliation && item.affiliation.id && (
                      <div>
                        <BankOutlined />{" "}
                        <Link
                          to={`/app/institutions?id=${item.affiliation.id}`}
                        >
                          {item.affiliation.name}
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
