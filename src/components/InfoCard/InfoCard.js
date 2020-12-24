import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@material-ui/core";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Link } from "react-router-dom";
import style from "./InfoCard.module.css";
const InfoCard = ({data}) => {
  return (
    <Link to={`/store/${data.id}`}>
    <Card className={style.card}>
      <CardMedia component="img" src={data.imageUrl} className={style.photo} />
      <CardContent className={style.cardContent}>
        <div className={style.header}>
          <Typography className={style.title}>
            {data.name}
          </Typography>
          <div className={style.ratingContainer}>
            <StarBorderIcon />
            <Typography className={style.rating}>{data.rating}/5</Typography>
          </div>
        </div>
        <Typography className={style.subtitle}>
          Highest Rated
        </Typography>
      </CardContent>
    </Card>
    </Link>
  );
};

export default InfoCard;
