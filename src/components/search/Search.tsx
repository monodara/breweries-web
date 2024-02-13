import React, { useState, ChangeEvent } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import SearchIcon from "@mui/icons-material/Search";
import { Container, InputAdornment, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { debounce } from "lodash";

import "./Search.css";

export default function Search() {
  const [alignment, setAlignment] = useState("name");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  // Debounce the getInput function using lodash
  const debouncedGetInput = debounce((value: string) => {
    console.log(value);
    setSearchKeyword(value);
  }, 1000); // Set the debounce delay to 1000 milliseconds

  const getInput = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedGetInput(e.target.value); // Call the debounced function
  };

  return (
    <div className="center-container">
      <div className="container">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="name">By Name</ToggleButton>
          <ToggleButton value="city">By City</ToggleButton>
          <ToggleButton value="state">By State</ToggleButton>
          <ToggleButton value="type">By type</ToggleButton>
        </ToggleButtonGroup>

        <Container maxWidth="md" sx={{ mt: 20 }}>
          <TextField
            id="search"
            type="search"
            label={`Search by ${alignment}`}
            onChange={getInput}
            sx={{ width: 600 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Link
                    to={`/breweries?by_alignment=${alignment}&searchKeyword=${searchKeyword}`}
                  >
                    <SearchIcon style={{ fill: "black" }} />
                  </Link>
                </InputAdornment>
              ),
            }}
          />
        </Container>
      </div>
    </div>
  );
}
