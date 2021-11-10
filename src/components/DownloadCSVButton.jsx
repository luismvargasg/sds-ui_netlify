import React from "react";

/* Components */
import { WarningModal } from "./WarningModal";

/* UI Library Components */
import { Button } from "antd";

/* Icons */
import { DownloadOutlined } from "@ant-design/icons";

const DownloadCSVButton = ({ URL }) => {
  const CSV_URL = `http://clustercien.udea.edu.co:8989${URL}&data=csv`;

  return (
    <Button
      icon={<DownloadOutlined />}
      type="dashed"
      shape="round"
      style={{ color: "#9D3715" }}
      href={CSV_URL}
      onClick={WarningModal}
    >
      CSV
    </Button>
  );
};

export default DownloadCSVButton;
