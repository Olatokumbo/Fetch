import React from "react";
import { Typography, Button } from "@material-ui/core";
import style from "./SearchCard.module.css";
const SearchCard = () => {
  return (
    <div className={style.searchCard}>
      <div className={style.header}>
        <Typography className={style.name}>Andrew Brown</Typography>
        <Typography className={style.rating}>+100</Typography>
      </div>
      <Typography component="p" className={style.info}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Button className={style.hireBtn}>Hire Fetcher</Button>
    </div>
  );
};

export default SearchCard;
