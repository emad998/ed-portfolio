import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";



// import {Link} from 'react-router-dom'
import Link from "@material-ui/core/Link";


const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  addRightMargin: {
    marginRight: "30px",
  },
  
 
}));




function Introduction() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
         
        

      
          <Typography variant="h6" className={classes.title}>
            Ed Portfolio Website
          </Typography>

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
            <Link
              href="/contact"
              color="inherit"
              className={classes.addRightMargin}
            >
              Contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>






      


    </div>
  );
}

export default Introduction;
