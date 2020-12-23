import { Typography } from "@material-ui/core";
import React, {useEffect} from "react";
// import StoreCard from "../../components/StoreCard/StoreCard";
import InfoCard from "../../components/InfoCard/InfoCard";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions";
import style from "./Location.module.css";

const Location = ({getStores, stores, cityName, match:{params:{cityId}}}) => {
  useEffect(()=>{
    window.scrollTo(0, 0);
    getStores(cityId);
  }, [getStores, cityId])
  return (
    <div className={style.location}>
      <div className={style.header}>
        <Typography className={style.title} gutterBottom>
          Find food and groceries delivered to you from Shops and Restaurants
          within <span>{cityName}</span>
        </Typography>
        <Typography className={style.slogan}>
          Have your food delivered to you at the convenience of your home
        </Typography>
      </div>
      <div className={style.container}>
        <Typography variant="h5">Popular Stores</Typography>
        <div className={style.wrapper}>
          <div className={style.storeList}>
            { stores.map((data)=><InfoCard key ={data.id} data={data}/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    stores: state.store.stores,
    cityName: state.store.cityName
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStores: (cityId) => dispatch(actionCreator.listStores(cityId)),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Location);
