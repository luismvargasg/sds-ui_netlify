import React from "react";

/* Components */
import { WarningModal } from "./WarningModal";

/* UI Library Components */
import { Button } from "antd";

/* Icons */
import { DownloadOutlined } from "@ant-design/icons";

const DownloadJSONButton = ({ URL }) => {
  const JSON_URL = `http://clustercien.udea.edu.co:8989${URL}&data=json`;

  return (
    <Button
      icon={<DownloadOutlined />}
      type="dashed"
      shape="round"
      style={{ color: "#9D3715" }}
      href={JSON_URL}
      onClick={WarningModal}
    >
      JSON
    </Button>
  );
};

export default DownloadJSONButton;
