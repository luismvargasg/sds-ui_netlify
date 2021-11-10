import React from "react";

/* Utilities */
import { Link } from "react-router-dom";

/* UI Library Components */
import { Avatar, Button, Card, Col, Space, Typography } from "antd";

/* Icons */
import orcid from "../media/icons/orcid";
import researcherid from "../media/icons/researcherid";
import scholar from "../media/icons/scholar";
import scopus from "../media/icons/scopus";
import { BankOutlined, TeamOutlined, ReadOutlined } from "@ant-design/icons";

/* UI Library Sub-components */
const { Meta } = Card;

const AuthorsTitleCard = ({ data, setCurrentURL }) => {
  const iconList = {
    orcid: orcid(),
    scholar: scholar(),
    scopus: scopus(),
    researcherid: researcherid(),
  };

  const renderedButtons = (URLList) => {
    return URLList.map((item) => (
      <Button
        type="link"
        key={item.source}
        href={item.url}
        icon={iconList[item.source]}
      />
    ));
  };

  return (
    <Col span={24}>
      <Card>
        <Meta
          avatar={
            <Avatar
              size={{ xs: 60, sm: 60, md: 150, lg: 150, xl: 150, xxl: 150 }}
              src={
                data.logo ? (
                  data.logo
                ) : (
                  <ReadOutlined style={{ color: "gray", fontSize: "40px" }} />
                )
              }
              style={{
                backgroundColor: "white",
                padding: 5,
                border: "1px solid lightgray",
              }}
            />
          }
          description={
            <>
              <Typography.Title level={2} style={{ marginBottom: 0 }}>
                {data.full_name}{" "}
                {data.country ? (
                  <img
                    style={{ paddingBottom: "3px" }}
                    alt={`flag of ${data.country}`}
                    title={data.country}
                    src={`https://flagcdn.com/28x21/${data.country_code.toLowerCase()}.png`}
                  />
                ) : (
                  ""
                )}
              </Typography.Title>
              <Typography.Paragraph
                style={{ fontSize: 22, margin: 0 }}
                underline
              >
                <BankOutlined
                  style={{ marginRight: "10px", color: "#1890ff" }}
                />
                <Link to={`/app/institutions?id=${data.affiliation.id}`}>
                  {data.affiliation.name}
                </Link>
              </Typography.Paragraph>
              <Typography.Paragraph
                style={{ fontSize: 22, marginBottom: "5px" }}
                underline
              >
                <TeamOutlined
                  style={{ marginRight: "10px", color: "#1890ff" }}
                />
                <Link to={`/app/groups?id=${data.group.id}`}>
                  {data.group.name}
                </Link>
              </Typography.Paragraph>
              <Space wrap>{renderedButtons(data.external_urls)}</Space>
            </>
          }
        />
      </Card>
    </Col>
  );
};

export default AuthorsTitleCard;
