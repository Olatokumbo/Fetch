import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@material-ui/core";
import Photo from "../../assets/sm.jpg";
import style from "./InfoCard.module.css";
const InfoCard = () => {
  return (
    <Card className={style.card}>
      <CardMedia
        component="img"
        src={Photo}
        className={style.photo}
      />
      <CardContent className={style.cardContent}>
      <Typography className={style.title}>SM Supermarket (San Pablo City)</Typography>
      <Typography className={style.subtitle} >One of our highly rated stores affiliated with us</Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
