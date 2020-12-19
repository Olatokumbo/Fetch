import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import CityCard from "../../components/CityCard/CityCard";
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions";
import style from "./Cities.module.css";

const Cities = ({ getCities, cities }) => {
  useEffect(() => {
    getCities();
  }, [getCities]);
  return (
    <div className={style.cities}>
      <Typography className={style.title}>
        Check out some our services within these Cities
      </Typography>
      <div className={style.wrapper}>
        <div className={style.cityGrid}>
          {cities.length >0 ?
        (cities.map((data) => (
            <CityCard key={data.id} data={data} />
          ))): (<div className={style.loading}>
            <CircularProgress />
        </div>)
        }
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cities: state.city.cities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCities: () => dispatch(actionCreator.listCities()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
