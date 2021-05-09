import React from 'react'
import { CssBaseline } from "@material-ui/core";
import NavigationToolbar from './NavigationToolbar'
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: 'white',
        marginTop: "70px"
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
            
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatarSize}/>
            <Typography variant="h1" component="h1">
            About US
            </Typography>
            <Typography variant="h4" component="h1">
            I am Full-Stack Web developer experienced in full stack Javascript(MERN, React with Firebase) and full stack Python(Django). I was introduced to coding 2 years ago and found out that I have a passion for coding though I have a background in Pharmacy. I am open to pure coding jobs or coding jobs with need for medical background.
            </Typography>
            
            </Container>
        </div>
    )
}

export default About
