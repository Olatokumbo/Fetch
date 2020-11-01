import React from "react";
import { Typography } from "@material-ui/core";
import Eden from "../../assets/eden.png";
import style from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={style.productCard}>
      <div className={style.left}>
        <Typography className={style.name}>Eden Cheese (430g)</Typography>
        <Typography className={style.info} component="p">
          EDEN Cheddar Cheese Eden is a processed filled cheese food
        </Typography>
        <Typography className={style.price}>PHP 160.00</Typography>
      </div>
      <div className={style.right}>
        <img className={style.image} src={Eden} alt="cheese" />
      </div>
    </div>
  );
};

export default ProductCard;
