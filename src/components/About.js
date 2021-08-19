import React from 'react'
import { CssBaseline } from "@material-ui/core";
import NavigationToolbar from './NavigationToolbar'
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ed from '../assets/ed.jpg'

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: '#2196f3',
        marginTop: "64px",
    },
    avatarSize: {
        width: '200px',
        height: '200px',
    }
  }));

function About() {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <CssBaseline />
            <Container>
            <NavigationToolbar />

            <Avatar alt="Emad Hanna" src={ed} className={classes.avatarSize} />
            <Typography variant="h1" component="h1">
            About
            </Typography>
            <Typography variant="h4" component="h1">
            I am Full-Stack Web and mobile application developer experienced in full stack Javascript(MERN, React with Firebase, React Native with Firebase) and full stack Python(Django). I was introduced to coding 2 years ago and found out that I have a passion for coding.
            </Typography>
            
            </Container>
        </div>
    )
}

export default About
