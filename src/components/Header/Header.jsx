import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Logo from "../../static/logo.png";
import SideBar from "../SideBar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    backgroundColor: "#6F8FB0"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  logo: {
    height: "50px"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.header}>
          <Typography variant="h6" className={classes.title}>
            <img src={Logo} alt="" className={classes.logo} />
          </Typography>
        </Toolbar>
      </AppBar>
      <SideBar />
    </div>
  );
}
