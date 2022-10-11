import React from "react";
import "./option.scss";
import { useNavigate } from "react-router-dom";

export default function Option(props) {
  const { region } = props;
  const navigate = useNavigate();

  const handleValueOption = () => {
    region.value !== "All"
      ? navigate(`/region/${region.value}`)
      : navigate("/");
  };

  return (
    <div className="item" onClick={handleValueOption}>
      <region.icon></region.icon>
      <span>{region.value}</span>
    </div>
  );
}
