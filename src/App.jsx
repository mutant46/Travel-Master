import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import useStyles from "./styles";

//  local components
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetail from "./components/PlaceDetail/PlaceDetail";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
