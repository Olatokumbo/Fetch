import React from "react";
import { Typography, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import style from "./Signin.module.css";
const Signin = () => {
  return (
    <div className={style.signin}>
      <div className={style.signinLeft}></div>
      <div className={style.signinRight}>
        <div className={style.container}>
        <Typography className={style.title} gutterBottom align="center">Fetch</Typography>
        <Typography className={style.signinText} align="center">Sign in to Fetch</Typography>
          <Button className={style.googleBtn} variant="contained">Sign in with Google</Button>
          <Typography color="textSecondary" variant="body2" align="center">Or</Typography>
          <form>
          <TextField className={style.input} label="Email" type="email" variant="outlined" size="small"/>
          <TextField className={style.input} label="Password" type="password" variant="outlined" size="small"/>
          <Button className={style.submit} type="submit" variant="contained" color="primary">Submit</Button>
          <Typography variant="body2" align="center">Don't have an Account? 
          <Link to="/signup" style={{textDecoration: "none"}}> Sign Up</Link>
          </Typography>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
