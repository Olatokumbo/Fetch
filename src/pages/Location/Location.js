import React from "react";
import StoreCard from "../../components/StoreCard/StoreCard";
import style from "./Location.module.css";

const Location = () => {
    return (
        <div className={style.location}>
            <div className={style.storeList}>
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard /><StoreCard />
            </div>
        </div>
    )
}

export default Location