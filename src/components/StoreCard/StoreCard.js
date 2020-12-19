import React from "react";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Typography } from "@material-ui/core";
import style from "./StoreCard.module.css";

const StoreCard = () => {
    return (
        <div className={style.storeCard}>
            <div className={style.img}>
            </div>
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
    )
}

export default StoreCard;