import React from "react";
import style from "./CityCard.module.css";
import { Typography } from "@material-ui/core";

const CityCard = () => {
  return (
    <div className={style.cityCard}>
      <Typography className={style.cityName}>Manila</Typography>
    </div>
  );
};

export default CityCard;
