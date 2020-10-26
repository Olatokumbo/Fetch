import React from "react";
import { Typography, Button, TextField } from "@material-ui/core";
import style from "./Join.module.css";

const Join = () => {
  return (
    <div className={style.join}>
      <div className={style.header}>
        <Typography variant="h4">Join us</Typography>
        <Typography gutterBottom>
          Please fill out this and we would get back to you as soon as possible
        </Typography>
        <form>
          <TextField
            variant="outlined"
            label="First Name"
            type="text"
            align="center"
            size="small"
            required
            className={style.input}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            variant="outlined"
            label="Last Name"
            type="text"
            size="small"
            required
            className={style.input}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            size="small"
            required
            className={style.input}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            variant="outlined"
            label="Full Address"
            className={style.input}
            multiline
            rows="2"
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            variant="outlined"
            label="Date of Birth"
            type="date"
            size="small"
            required
            InputLabelProps={{
              shrink: true,
            }}
            className={style.input}
          />
          <TextField
            variant="outlined"
            label="Resume"
            className={style.input}
            type="file"
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            variant="outlined"
            label="Cover Letter"
            className={style.input}
            multiline
            rows="6"
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            color="primary"
            variant="contained"
            size="large"
            type="submit"
            className={style.submitBtn}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Join;
