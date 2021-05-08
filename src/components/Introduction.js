import React from 'react'
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    welcome: {
      marginLeft: "20px",
      marginTop: "100px",
    },
    description: {
      marginLeft: "20px",
    },
    large: {
      width: "300px",
      height: "300px",
      marginTop: "100px",
    },
    root: {
      flexGrow: 1,
    },
    background: {
        backgroundColor: 'white',
        marginTop: "10px"
    }
  }));

function Introduction() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.background}>
        <Container>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h1" className={classes.welcome}>
                  Hi, I am Ed Hanna
                </Typography>

                <Typography variant="h5" className={classes.description}>
                  I am Full Stack Web developer experienced in Javascript(MERN,
                  React with Firebase) and Python(Django).
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  className={classes.large}
                />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
        </div>
    )
}

export default Introduction
