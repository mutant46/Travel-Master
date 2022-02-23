import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#273746 ",
    padding: theme.spacing(1, 0.5),
    boxShadow: "none",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1, 2),
    },
  },
  brand: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  logo: {
    fontFamily: "Staatliches",
    letterSpacing: "2px",
    padding: theme.spacing(1, 1, 0, 1),
  },
  title: {
    display: "none",
    color: theme.palette.grey[400],
    letterSpacing: "1.5px",
    fontWeight: "bold",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  box: {
    width: "100%",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginLeft: 0,
    width: "100%",
    transition: "width 1s ease",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
      minWidth: "350px",
      width: "auto",
      padding: theme.spacing(0.25, 0),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1.25),
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create("width"),
    width: "100%",
    color: alpha(theme.palette.common.white, 0.65),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
