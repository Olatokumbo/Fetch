import { Typography } from "@material-ui/core";
import React from "react";
import StoreCard from "../../components/StoreCard/StoreCard";
import style from "./Location.module.css";

const Location = () => {
  return (
    <div className={style.location}>
      <div className={style.header}>
        <Typography className={style.title} gutterBottom>
          Find food and groceries delivered to you from Shops and Restaurants
          within <span>San Pablo City</span>
        </Typography>
        <Typography className={style.slogan}>
            Have your food delivered to you at the convenience of your home
        </Typography>
      </div>
      <div className={style.container}>
        <Typography variant="h5">Popular Stores</Typography>
        <div className={style.storeList}>
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
        </div>
      </div>
    </div>
  );
};

export default Location;
