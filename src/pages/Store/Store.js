import React, {useEffect} from "react";
import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Category from "../../containers/Category/Category";
import CartItem from "../../components/CartItem/CartItem";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions";
import style from "./Store.module.css";
const Store = ({storeInfo, getStoreInfo, match:{params:{storeId}}}) => {
  useEffect(()=>{
    window.scrollTo(0, 0);
    getStoreInfo(storeId)
  }, [getStoreInfo, storeId])
  return (
    <div className={style.store}>
      <div className={style.storeLeft}>
        <div className={style.cover}>
          <img src={storeInfo.imageUrl} alt="forest" className={style.coverImage} />
        </div>
        <div className={style.info}>
          <div className={style.header}>
            <div className={style.storeInfo}>
              <Typography className={style.name}>
               {`${storeInfo.name} ${storeInfo.city}`}
              </Typography>
              <Typography className={style.address}>
                {storeInfo.address}
              </Typography>
              <Rating value={storeInfo.rating} readOnly />
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


const mapStateToProps = (state) => {
  return {
    storeInfo: state.store.storeInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStoreInfo: (storeId) => dispatch(actionCreator.fetchStoreInfo(storeId)),
  };
};


export default connect (mapStateToProps, mapDispatchToProps)(Store);
