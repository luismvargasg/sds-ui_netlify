import React from "react";

/* UI Library Components */
import { Card, Spin } from "antd";

/* Icons */
import { LoadingOutlined } from "@ant-design/icons";

const LoadingCard = ({ title = "Cargando información", height = "600px" }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;
  return (
    <Card size="small" title={title} style={{ height: height }}>
      <div className="loading-card__container">
        <Spin indicator={antIcon} style={{ marginTop: "160px" }} />
      </div>
    </Card>
  );
};

export default LoadingCard;
