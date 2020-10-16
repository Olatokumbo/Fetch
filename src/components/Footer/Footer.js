import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Divider, Typography, IconButton } from "@material-ui/core";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.top}>
        <div className={style.about}>
          <Typography>About</Typography>
          <Typography>How Fetch Works</Typography>
          <Typography>Terms</Typography>
          <Typography>Policies</Typography>
          <Typography>FAQ</Typography>
          <Typography>Careers</Typography>
        </div>
        <div className={style.about}>
          <Typography>About</Typography>
          <Typography>How Fetch Works</Typography>
          <Typography>Terms</Typography>
          <Typography>Policies</Typography>
          <Typography>FAQ</Typography>
          <Typography>Careers</Typography>
        </div>
        <div className={style.about}>
          <Typography>About</Typography>
          <Typography>How Fetch Works</Typography>
          <Typography>Terms</Typography>
          <Typography>Policies</Typography>
          <Typography>FAQ</Typography>
          <Typography>Careers</Typography>
        </div>
        <div className={style.about}>
          <Typography>About</Typography>
          <Typography>How Fetch Works</Typography>
          <Typography>Terms</Typography>
          <Typography>Policies</Typography>
          <Typography>FAQ</Typography>
          <Typography>Careers</Typography>
        </div>
      </div>
      <Divider />
      <div className={style.bottom}>
        <Typography className={style.copyRight}>
          © 2020 Fetch, Inc. All rights reserved
        </Typography>
        <div className={style.socials}>
          <IconButton><FacebookIcon /></IconButton>
          <IconButton><InstagramIcon /></IconButton>
          <IconButton><TwitterIcon /></IconButton>
        </div>
      </div>
    </div>
  );
};

export default Footer;
