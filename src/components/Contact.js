import React from 'react'
import { CssBaseline } from "@material-ui/core";
import NavigationToolbar from './NavigationToolbar'
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: '#4caf50',
        marginTop: "60px"
    }
  }));

function Contact() {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <CssBaseline />
            <NavigationToolbar />
            <Container>
            <Typography variant="h1" component="h2">
            Get in touch
            </Typography>
            <Typography variant="h4" component="h3">
            Say Hi or find me on other platforms: 
            <Link href="https://github.com/emad998" color="textprimary">
            GitHub 
            </Link>
            &
            <Link href="https://www.linkedin.com/in/ed-h-7892b4195/" color="textprimary">
            LinkedIn
            </Link>
            
            </Typography>
            
            </Container>
        </div>
    )
}

export default Contact
