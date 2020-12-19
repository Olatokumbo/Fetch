import React from "react";
import { Typography } from "@material-ui/core";
import CityCard from "../../components/CityCard/CityCard";
import style from "./Cities.module.css";

const Cities = () =>{
    return(
        <div className={style.cities}>
            <Typography className={style.title}>Check out some our affiliated stores with these Cities</Typography>
            <div className={style.wrapper}>
            <div className={style.cityGrid}>
                <CityCard/>
                <CityCard/><CityCard/><CityCard/><CityCard/><CityCard/><CityCard/>
            </div>
            </div>
        </div>
    )
}

export default Cities; 