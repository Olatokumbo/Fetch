import React from "react";
import { Typography } from "@material-ui/core";
import ProductCard from "../../components/ProductCard/ProductCard";
import style from "./Category.module.css";

const Category = () => {
  return (
    <div className={style.category}>
      <Typography className={style.title}>Diary</Typography>
      <div className={style.list}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Category;
