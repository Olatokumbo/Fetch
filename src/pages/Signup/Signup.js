import React, { useState, useEffect } from "react";
import { Typography, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions"
import style from "./Signup.module.css";
const Signup = ({error, signin}) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [countryData, setCountryData] = useState({});
  useEffect(() => {
    const getCountryData = async () => {
      // fetching country data (flag, calling code) from api
      await axios("https://restcountries.eu/rest/v2/name/philippines").then(
        (country) => {
          const { flag, callingCodes } = country.data[0];
          setCountryData({ flag, callingCodes});
        }
      );
    };
    getCountryData();
  }, []);
  const submit = () =>{
   if(fname && lname && email && password && number){
    console.log("signup");
    signin({fname, lname, email, password, number})
   }
  }
  return (
    <div className={style.signup}>
      <div className={style.signupLeft}></div>
      <div className={style.signupRight}>
        <div className={style.container}>
          <Typography className={style.title} gutterBottom align="center">
            Fetch
          </Typography>
          <Typography className={style.signupText} align="center">
            Sign up to Fetch
          </Typography>
          <Button className={style.googleBtn} variant="contained" disabled>
            Sign up with Google
          </Button>
          <Typography color="textSecondary" variant="body2" align="center">
            Or
          </Typography>
          <form onSubmit={submit}>
            <div className={style.name}>
              <TextField
                className={style.input}
                label="First Name"
                type="text"
                variant="outlined"
                size="small"
                required
                value={fname}
                onChange={(e)=>setFname(e.target.value)}
              />
              <TextField
                className={style.input}
                label="Last Name"
                type="text"
                variant="outlined"
                size="small"
                required
                value={lname}
                onChange={(e)=>setLname(e.target.value)}
              />
            </div>
            <TextField
              className={style.input}
              label="Email"
              type="email"
              variant="outlined"
              size="small"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <div className={style.phone}>
              <div className={style.code}>
                <img className={style.flag} src={countryData?.flag} alt="nn" />
                <Typography>{countryData.callingCodes? ("+" + countryData.callingCodes[0]): ""}</Typography>
              </div>
              <TextField
                className={style.input}
                label="Phone Number"
                type="number"
                variant="outlined"
                size="small" 
                inputProps={{ maxLength: 10 }}
                required              
                value={number}
                onChange={(e)=>setNumber(e.target.value)}
              />
            </div>
            <TextField
              className={style.input}
              label="Password"
              type="password"
              variant="outlined"
              size="small"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <Button
              className={style.submit}
              type="submit"
              variant="contained"
              color="primary"
            >
              Create an Account
            </Button>
            <Typography className={style.error}>{error}</Typography>
            <Typography variant="body2" align="center">
              Already have an Account?
              <Link to="/signin" style={{ textDecoration: "none" }}>
                Sign In
              </Link>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>{
  return{
    error: state.auth.error
  }
}

const mapDisptachToProps = (dispatch) =>{
  return {
    signin: (credentials)=> dispatch(actionCreators.startSignin(credentials))
  }
}
export default connect(mapStateToProps, mapDisptachToProps)(Signup);
