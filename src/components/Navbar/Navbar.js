import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Chip,
  Avatar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Divider,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import avatar from "../../assets/davidO.jpg";
import style from "./Navbar.module.css";
const Navbar = () => {
  const history = useHistory()
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky">
      <Toolbar className={style.toolbar}>
        <div className={style.brand}>
          <Link to="/">
            <Typography className={style.title}>Fetch</Typography>
          </Link>
          <div className={style.search}>
            <SearchIcon className={style.searchIcon} />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className={style.menu}>
          <Button className={style.joinUs} onClick={()=>history.push("/join")}>Become a fetcher</Button>
          <Chip
            onClick={handleClick}
            className={style.chip}
            size="medium"
            avatar={
              <Avatar alt="DavidO" src={avatar} className={style.avatar} />
            }
            label="David King"
          />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => {history.push('/profile')}}>My Profile</MenuItem>
            <MenuItem onClick={() => {history.push('/signin')}}>Sign in</MenuItem>
            <MenuItem onClick={() => history.push('/signup')}>Sign up</MenuItem>
            <Divider />
            <MenuItem>Help</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
