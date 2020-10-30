import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Photo from "../../assets/davidO.jpg";
import style from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={style.profile}>
      <div className={style.info}>
        <IconButton className={style.settingsBtn}>
          <SettingsIcon />
        </IconButton>
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
      </div>
      <div className={style.account}>
        <div className={style.accountLeft}>
          <ul>
            <li>
              <Link to="#">
                <Typography>Recent Orders</Typography>
              </Link>
            </li>
            <li>
              <Link to="#">
                <Typography>To Receive</Typography>
              </Link>
            </li>
            <li>
              <Link to="#">
                <Typography>Transaction History</Typography>
              </Link>
            </li>
            <li>
              <Link to="#">
                <Typography>My Reviews</Typography>
              </Link>
            </li>
            <li>
              <Link to="#">
                <Typography>Cancelled</Typography>
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.accountRight}>
          <Typography gutterBottom>Recent Orders</Typography>
          <TableContainer component={Paper} className={style.tableContainer}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell align="center">Total Cost</TableCell>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">View</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Order Id
                  </TableCell>
                  <TableCell align="center">Total Cost</TableCell>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">
                    <Link to={`/order`}>
                      <IconButton color="primary">
                        <VisibilityIcon />
                      </IconButton>
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Order Id
                  </TableCell>
                  <TableCell align="center">Total Cost</TableCell>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">
                    <Link to={`/order`}>
                      <IconButton color="primary">
                        <VisibilityIcon />
                      </IconButton>
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button variant="outlined" color="primary" className={style.showMore}>
            Show More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
