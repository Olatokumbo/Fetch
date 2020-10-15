import React from "react";
import { AppBar, Toolbar, Chip, Avatar, Typography, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import avatar from "../../assets/davidO.jpg";
import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar className={style.toolbar}>
        <div className={style.brand}>
          <Typography className={style.title}>Fetch</Typography>
          <div className={style.search}>
            <SearchIcon className={style.searchIcon} />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className={style.menu}>
        <Button className={style.joinUs}>Become a fetcher</Button>
          <Chip
            className={style.chip}
            size="medium"
            avatar={
              <Avatar alt="DavidO" src={avatar} className={style.avatar} />
            }
            label="David King"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
