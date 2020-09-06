import React from "react";
import { ReactComponent as Copy } from "../../assets/icons/copy-outline.svg";

const icons = {
  copy: Copy,
};

const Icon = ({ icon, onClick }) => {
  const IconComponent = icons[icon];
  return <IconComponent onClick={onClick} />;
};

export default Icon;
