import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import Photo from "../../assets/davidO.jpg";
import style from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={style.profile}>
      <div className={style.info}>
        <div className={style.infoLeft}>
          <img src={Photo} className={style.avatar} alt="profile" />
        </div>
        <div className={style.infoRight}>
          <div className={style.mainInfo}>
            <Typography className={style.name}>Odesola, David F.</Typography>
            <Typography className={style.email}>
              faithodesola@gmail.com
            </Typography>
          </div>
          <Card>
            <CardContent>
              <Typography className={style.address} component="p">
                565 Quincy Street, STAMFORD, CT, Connecticut, 06903
              </Typography>
              <Typography className={style.phone}>267-487-3020</Typography>
            </CardContent>
          </Card>
        </div>
        <IconButton className={style.settingsBtn}><SettingsIcon/></IconButton>
      </div>
      <div className={style.profileBottom}></div>
    </div>
  );
};

export default Profile;
