import React from 'react'
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import ed from '../assets/ed.jpg'
import { motion } from "framer-motion"



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
        backgroundColor: '#2196f3',
        marginTop: "10px"
    }
  }));

function Introduction() {
    const classes = useStyles();
    return (
        <div>
            <div 
            className={classes.background}>
        <Container>
          <motion.div 
          className={classes.root}
          initial={{x: 320}}
          animate={{x: 0}}
          transition={{type: 'spring', delay: 1}}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h1" className={classes.welcome}>
                  Hi, I am Ed Hanna
                </Typography>

                <Typography variant="h5" className={classes.description}>
                  I am Full Stack Web and mobile application developer experienced in Javascript(MERN,
                  React/Firebase, React Native/Firebase) and Python(Django).
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Avatar
                  alt="Remy Sharp"
                  src={ed}
                  className={classes.large}
                />
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </div>
        </div>
    )
}

export default Introduction
