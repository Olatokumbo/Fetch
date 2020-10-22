import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  Button,
  Typography,
} from "@material-ui/core";
import style from "./Search.module.css";

const Search = () => {
  const [sort, setSort] = useState("");
  return (
    <div className={style.profile}>
      <div className={style.filters}>
        <FormControl variant="outlined" className={style.filter}>
          <InputLabel htmlFor="outlined-age-native-simple">
            Sorted by
          </InputLabel>
          <Select
            native
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
            label="Sorted by"
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={style.filter}>
          <InputLabel htmlFor="outlined-age-native-simple">
            Sorted by
          </InputLabel>
          <Select
            native
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
            label="Sorted by"
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={style.filter}>
          <InputLabel htmlFor="outlined-age-native-simple">
            Sorted by
          </InputLabel>
          <Select
            native
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
            label="Sorted by"
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
        <Button size="small" className={style.clearAll}>
          Clear All
        </Button>
      </div>
      <Typography gutterBottom>Results</Typography>
      <div className={style.results}></div>
    </div>
  );
};

export default Search;
