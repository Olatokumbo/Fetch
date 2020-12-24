import React from "react";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Typography } from "@material-ui/core";
import Pic from "../../assets/foods.jpg"
import { Link } from "react-router-dom";
import style from "./StoreCard.module.css";

const StoreCard = () => {
    return (
        <Link to={`/store/:${storeId}`}>
            <div className={style.storeCard}>
            <img src={Pic} alt="Store" className={style.img}/>
            <div className={style.description}>
                <div className={style.header}>
                    <Typography className={style.title}>Smoked Tuna Belly</Typography>
                    <div className={style.ratingContainer}>
                        <StarBorderIcon />
                        <Typography className={style.rating}>4/5</Typography>
                    </div>
                </div>
                <Typography className={style.info}>free delivery</Typography>
            </div>
        </div>
        </Link>
    )
}

export default StoreCard;