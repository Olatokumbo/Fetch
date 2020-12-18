import React from "react";
import { Typography, Button } from "@material-ui/core";
import { InfoCard} from "../../components";
import Cities from "../../containers/Cities/Cities";
import Phone from "../../assets/phone.png";
import style from "./Home.module.css";
const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.header}>
        <div className={style.headerLeft}>
          <Typography className={style.tagLine}>
            Food delivery service
          </Typography>
          <Typography className={style.subtitle}>
            Pick out for food and groceries online and have them delivered to
            you in no time. Fetch is definitely the way to Go!
          </Typography>
          <Button className={style.btn}>Get Started</Button>
        </div>
        <div className={style.headerRight}>
          <img src={Phone} className={style.phone} alt="" />
        </div>
      </div>
      <div className={style.cardSection}>
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
      <Cities/>
      <div className={style.matter}>
        <div className={style.matterLeft}>
          <Typography>
            Here we stand with others against racial discrimination and support
            the #BlackLivesMatter Movement
          </Typography>
          <Button className={style.matterBtn}>Learn more</Button>
        </div>
        <div className={style.matterRight}>
          <Typography>
            At this company, we do not condone any form of racial
            discrimination. Additionally, we have also partnered with various
            humans rights organizations so could help tackle this issue on a more effective scale
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default Home;
