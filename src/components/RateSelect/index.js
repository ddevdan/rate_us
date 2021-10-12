import { Rate } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { SelectWraper } from "./styles";

const customIcons = {
  1: <FrownOutlined className="mudapf" title="tristão" />,
  2: <FrownOutlined title="tristinho" />,
  3: <MehOutlined title="ok" />,
  4: <SmileOutlined title="feliz" />,
  5: <SmileOutlined title="felizão" />,
};

function RateSelect({ setFormFields }) {
  const handleRate = (e) => {
    setFormFields((prev) => {
      return { ...prev, stars: e };
    });
  };
  return (
    <SelectWraper
      style={{ color: "#000000" }}
      defaultValue={0}
      onChange={handleRate}
      character={({ index }) => customIcons[index + 1]}
    />
  );
}

export default RateSelect;
