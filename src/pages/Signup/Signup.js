import React from "react";
import { Typography, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import style from "./Signup.module.css";
const Signup = () => {
  return (
    <div className={style.signup}>
      <div className={style.signupLeft}></div>
      <div className={style.signupRight}>
        <div className={style.container}>
        <Typography className={style.title} gutterBottom align="center">Fetch</Typography>
        <Typography className={style.signupText} align="center">Sign up to Fetch</Typography>
          <Button className={style.googleBtn} variant="contained">Sign up with Google</Button>
          <Typography color="textSecondary" variant="body2" align="center">Or</Typography>
          <form>
          <div className={style.name}>
          <TextField className={style.input} label="First Name" type="text" variant="outlined" size="small"/>
          <TextField className={style.input} label="Last Name" type="text" variant="outlined" size="small"/>
          </div>
          <TextField className={style.input} label="Email" type="email" variant="outlined" size="small"/>
          <TextField className={style.input} label="Password" type="password" variant="outlined" size="small"/>
          <Button className={style.submit} type="submit" variant="contained" color="primary">Create an Account</Button>
          <Typography variant="body2" align="center">Already have an Account? 
          <Link to="/signin" style={{textDecoration: "none"}}> Sign In</Link>
          </Typography>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
