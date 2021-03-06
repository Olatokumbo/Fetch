import React, { useState } from "react";
import { Typography, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions"
import style from "./Signin.module.css";
const Signin = ({error}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={style.signin}>
      <div className={style.signinLeft}></div>
      <div className={style.signinRight}>
        <div className={style.container}>
          <Typography className={style.title} gutterBottom align="center">
            Fetch
          </Typography>
          <Typography className={style.signinText} align="center">
            Sign in to Fetch
          </Typography>
          <Button className={style.googleBtn} variant="contained" disabled>
            Sign in with Google
          </Button>
          <Typography color="textSecondary" variant="body2" align="center">
            Or
          </Typography>
          <form>
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
              Submit
            </Button>
            <Typography className={style.error}>{error}</Typography>
            <Typography variant="body2" align="center">
              Don't have an Account?
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Sign Up
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
export default connect(mapStateToProps, mapDisptachToProps)(Signin);
