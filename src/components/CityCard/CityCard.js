import React from "react";
import style from "./CityCard.module.css";
// import Picture from "../../assets/Manila.jpeg";
import { Typography, IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const CityCard = ({data}) => {
  return (
    <div className={style.cityCard}>
      <div className={style.cityInfo}>
        <Typography className={style.cityName}>{data.name}</Typography>
        <IconButton size="medium" className={style.btn}><ArrowForwardIosIcon/></IconButton>
      </div>
      <img src={data.imageUrl} alt="Manila" className={style.picture} />
    </div>
  );
};

export default CityCard;
