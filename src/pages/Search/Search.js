import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@material-ui/core";
import SearchCard from "../../components/SearchCard/SearchCard";
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
        <Button size="small" variant="contained" color="primary" className={style.clearAll}>
          Clear All
        </Button>
      </div>
      <div className={style.results}>
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </div>
      <Button variant="outlined" color="primary" className={style.showMore} size="large">Show More</Button>
    </div>
  );
};

export default Search;
