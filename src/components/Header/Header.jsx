import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" classes={{ root: classes.navbar }}>
      <Toolbar className={classes.toolbar}>
        <Box display="flex" className={classes.brand}>
          <img src="traveller.png" alt="logo" width="40px" />
          <Typography variant="h5" className={classes.logo}>
            Travel Advisor
          </Typography>
        </Box>
        <Box display="flex" className={classes.box}>
          <Typography variant="h7" className={classes.title}>
            Explore new places
          </Typography>
          {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              autoFocus={true}
              placeholder="Search…"
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
