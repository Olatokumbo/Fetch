import React, { useState, useEffect } from "react";
import { Typography, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import style from "./Signup.module.css";
const Signup = () => {
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
          <Button className={style.googleBtn} variant="contained">
            Sign up with Google
          </Button>
          <Typography color="textSecondary" variant="body2" align="center">
            Or
          </Typography>
          <form>
            <div className={style.name}>
              <TextField
                className={style.input}
                label="First Name"
                type="text"
                variant="outlined"
                size="small"
              />
              <TextField
                className={style.input}
                label="Last Name"
                type="text"
                variant="outlined"
                size="small"
              />
            </div>
            <TextField
              className={style.input}
              label="Email"
              type="email"
              variant="outlined"
              size="small"
            />
            <div className={style.phone}>
              <div className={style.code}>
                <img
                  className={style.flag}
                  src={countryData?.flag}
                  alt=""
                />
                <Typography>{countryData.callingCodes? ("+" + countryData.callingCodes[0]): ""}</Typography>
              </div>
              <TextField
                className={style.input}
                label="Phone Number"
                type="text"
                variant="outlined"
                size="small"
              />
            </div>
            <TextField
              className={style.input}
              label="Password"
              type="password"
              variant="outlined"
              size="small"
            />
            <Button
              className={style.submit}
              type="submit"
              variant="contained"
              color="primary"
            >
              Create an Account
            </Button>
            <Typography variant="body2" align="center">
              Already have an Account?
              <Link to="/signin" style={{ textDecoration: "none" }}>
                {" "}
                Sign In
              </Link>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
