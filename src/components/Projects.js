import React from "react";
import { CssBaseline } from "@material-ui/core";
import NavigationToolbar from "./NavigationToolbar";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  background: {
    backgroundColor: "#4caf50",
    marginTop: "70px",
  },
  root2: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  linkStyle: {
    marginLeft: "10px",
  },
}));

function Projects() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <NavigationToolbar />

      <div className={classes.background}>
        <Container>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card className={classes.root2}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Plants Guide
                    </Typography>
                    <Typography variant="body2" component="p">
                      Plants Guide done using Full Stack Python(Django)
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small" >Learn More</Button> */}
                    <Link
                      href="https://www.plantguidexample.com"
                      color="secondary"
                      className={classes.linkStyle}
                    >
                      Learn more
                    </Link>
                  </CardActions>
                </Card>
              </Grid>

              {/* second Grid item */}

              <Grid item xs={12} md={6}>
                <Card className={classes.root2}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Meal Generator
                    </Typography>
                    <Typography variant="body2" component="p">
                      Meal Generator web application done using HTML, CSS, Javascript, jQuery, mealDb Api.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small" >Learn More</Button> */}
                    <Link
                      href="https://hardcore-noether-d4e0bb.netlify.app/"
                      color="secondary"
                      className={classes.linkStyle}
                    >
                      Learn more
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Container>

      </div>
    </div>
  );
}

export default Projects;
