import React from "react";
import {Typography} from "@material-ui/core"
import style from "./Category.module.css";

const Category = () =>{
    return(
        <div className={style.category}>
        <Typography className={style.title}>Diary</Typography>
        </div>
    )
}

export default Category