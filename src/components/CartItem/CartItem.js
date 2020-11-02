import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import style from "./CartItem.module.css";

const CartItem = () => {
  return (
    <div className={style.cartItem}>
      <div className={style.left}>
        <Typography className={style.name}>Eden Cheese</Typography>
      </div>
      <div className={style.middle}>
        <Typography className={style.price}>100 PHP</Typography>
        <div className={style.controls}>
          <IconButton size="small">
            <RemoveIcon />
          </IconButton>
          <Typography>1</Typography>
          <IconButton size="small">
            <AddIcon />
          </IconButton>
        </div>
      </div>
      <div className={style.right}>
        <IconButton size="small">
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
