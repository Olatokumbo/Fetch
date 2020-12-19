import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@material-ui/core";
import Photo from "../../assets/sm.jpg";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import style from "./InfoCard.module.css";
const InfoCard = () => {
  return (
    <Card className={style.card}>
      <CardMedia component="img" src={Photo} className={style.photo} />
      <CardContent className={style.cardContent}>
        <div className={style.header}>
          <Typography className={style.title}>
            SM Supermarket (San Pablo)
          </Typography>
          <div className={style.ratingContainer}>
            <StarBorderIcon />
            <Typography className={style.rating}>4/5</Typography>
          </div>
        </div>
        <Typography className={style.subtitle}>
          Highest Rated
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
