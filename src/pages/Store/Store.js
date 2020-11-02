import React from "react";
import Image from "../../assets/sm.jpg";
import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Category from "../../containers/Category/Category";
import CartItem from "../../components/CartItem/CartItem";
import style from "./Store.module.css";
const Store = () => {
  return (
    <div className={style.store}>
      <div className={style.storeLeft}>
        <div className={style.cover}>
          <img src={Image} alt="forest" className={style.coverImage} />
        </div>
        <div className={style.info}>
          <div className={style.header}>
            <div className={style.storeInfo}>
              <Typography className={style.name}>
                SM Supermarket (San Pablo City)
              </Typography>
              <Typography className={style.address}>
                National Highway, San Pablo City, 4000 Laguna
              </Typography>
              <Rating value={5} readOnly />
            </div>
            <div className={style.categories}>
              <ButtonGroup
                variant="text"
                color="primary"
                aria-label="text primary button group"
              >
                <Button>Dairy</Button>
                <Button>Meat</Button>
                <Button>Fruits</Button>
                <Button>Vegetables</Button>
                <Button>Pasteries</Button>
                <Button>Spices</Button>
              </ButtonGroup>
            </div>
          </div>
          <Category />
          <Category />
          <Category />
        </div>
      </div>
      <div className={style.storeRight}>
        <Typography gutterBottom className={style.cartTitle}>
          Your Cart
        </Typography>
        <Typography color="textSecondary" variant="body2">
          Start adding items to your cart
        </Typography>
        <div className={style.cartContainer}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className={style.price}>
          <Typography className={style.total}>Total</Typography>
          <Typography>PHP 0.00</Typography>
        </div>
        <Button
          disabled
          color="secondary"
          variant="contained"
          className={style.checkoutBtn}
        >
          Go to checkout
        </Button>
      </div>
      <div className={style.stickyCart}>
        <div className={style.stickyCartContainer}>
          <ShoppingCartIcon />
          <Typography>View Cart</Typography>
          <Typography>PHP 0.00</Typography>
        </div>
      </div>
    </div>
  );
};

export default Store;
