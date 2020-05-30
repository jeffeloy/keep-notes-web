import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Avatar from "@material-ui/core/Avatar";

import logo from "../../statics/logo.png";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: "#3B4253",
    background: "#D4D9E6",
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    background:
      "linear-gradient(180deg, rgba(212,217,230,1) 0%, rgba(226,227,235,1) 50%, rgba(250,248,251,1) 100%)",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    borderRight: "none",
  },
  drawerClose: {
    background:
      "linear-gradient(180deg, rgba(203,207,219,1) 0%, rgba(212,217,230,1) 50%, rgba(212,217,230,1) 100%)",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
    borderRight: "none",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuItem: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,

    background: "#FAF8FB",
  },
}));

function Layout() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const toggleDrawerOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Avatar
            alt="Keep Notes"
            src={logo}
            style={{ marginLeft: 15, marginRight: 10 }}
          />
          <Typography variant="h6" style={{ fontWeight: 700 }} noWrap>
            Keep Notes
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}></div>

        <List>
          <ListItem button className={classes.menuItem}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <Typography variant="h7" style={{ fontWeight: 500 }} noWrap>
              Notas
            </Typography>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Layout;
