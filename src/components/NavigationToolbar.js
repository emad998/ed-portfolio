import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { CssBaseline } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
// import {Link} from 'react-router-dom'
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(4),
    },
  },
  addRightMargin: {
    marginRight: '30px'
  }
}));

function Introduction() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
          <Typography variant="h6" className={classes.title}>
            Ed Portfolio Website
          </Typography>

          {/* <Link to="/"><Button color="inherit">Home</Button></Link>
          <Link to="/projects"><Button color="inherit">Projects</Button></Link>
          <Link to="/about"><Button color="inherit">About</Button></Link>
          <Link to="/contact"><Button color="inherit">Contact</Button></Link> */}

          <Typography className={classes.root}>
            <Link href="/" color="inherit">
              Home
            </Link>
            <Link href="/projects" color="inherit">
              Projects
            </Link>
            <Link href="/about" color="inherit">
              About
            </Link>
            <Link href="/contact" color="inherit" className={classes.addRightMargin}>
              Contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Introduction;
