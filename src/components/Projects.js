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
                      Plants Guide(Python/Django)
                    </Typography>
                    <Typography variant="body2" component="p">
                      Plants Guide done using Full Stack Python(Django). It was a group project in which I was responsible for the backend.
                    </Typography>

                  </CardContent>
                  <CardActions>
                    {/* <Button size="small" >Learn More</Button> */}
                    <Link
                      href="https://www.plantguidexample.com"
                      color="secondary"
                      className={classes.linkStyle}
                    >
                      Visit site
                    </Link>

                    <Link
                      href="https://github.com/emad998/plants2"
                      color="secondary"
                      className={classes.linkStyle}
                    >
                      Github Repo
                    </Link>
                  </CardActions>
                </Card>
              </Grid>

              {/* second Grid item */}

              <Grid item xs={12} md={6}>
                <Card className={classes.root2}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Meal Generator(Javascript/Jquery, Bootstrap)
                    </Typography>
                    <Typography variant="body2" component="p">
                      Meal Generator web application using HTML, CSS, Javascript, jQuery, bootstrap, mealDb Api.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small" >Learn More</Button> */}
                    <Link
                      href="https://trinitytest2.dreamhosters.com/"
                      color="secondary"
                      className={classes.linkStyle}
                    >
                      Visit Site
                    </Link>
                    <Link
                      href="https://github.com/emad998/chefToRescueV2"
                      color="secondary"
                      className={classes.linkStyle}
                    >
                      Github Repo
                    </Link>
                  </CardActions>
                </Card>
              </Grid>




            {/* Third project */}
            <Grid item xs={12} md={6}>
                <Card className={classes.root2}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Meal Generator(Javascript/React, Firebase)
                    </Typography>
                    <Typography variant="body2" component="p">
                      Meal Generator web application done using HTML, CSS, Javascript, React, Redux and Firebase for the backend.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small" >Learn More</Button> */}
                    <Link
                      href="https://auth-development-1543d.web.app/"
                      color="secondary"
                      className={classes.linkStyle}
                    >
                      visit site
                    </Link>
                    <Link
                      href="https://github.com/emad998/chefToRescueReact"
                      color="secondary"
                      className={classes.linkStyle}
                    >
                      Github Repo
                    </Link>
                  </CardActions>
                </Card>
              </Grid>



            {/* fourth project */}
            <Grid item xs={12} md={6}>
                <Card className={classes.root2}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Meal Generator(Javascript/React Native, Firebase)
                    </Typography>
                    <Typography variant="body2" component="p">
                      Meal Generator mobile application done using HTML, CSS, Javascript, React Native and Firebase for the backend.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small" >Learn More</Button> */}
                    <Link
                      href="https://github.com/emad998/reactnativeexpo-cheftorescue"
                      color="secondary"
                      className={classes.linkStyle}
                    >
                      Github Repo
                    </Link>
                  </CardActions>
                </Card>
              </Grid>




            {/* fifth project */}
            <Grid item xs={12} md={6}>
                <Card className={classes.root2}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Meal Generator(Javascript/MERN)
                    </Typography>
                    <Typography variant="body2" component="p">
                      Meal Generator web application done using HTML, CSS, Javascript, React, Redux,  Node, Express, mongoDB and mongoose.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small" >Learn More</Button> */}
                    <Link
                      href="https://github.com/emad998/mern-cheftorescue"
                      color="secondary"
                      className={classes.linkStyle}
                    >
                      Github Repo
                    </Link>
                  </CardActions>
                </Card>
              </Grid>


              {/* 6th project */}
              <Grid item xs={12} md={6}>
                <Card className={classes.root2}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                     Cocktail Generator(Javascript/Materialize)
                    </Typography>
                    <Typography variant="body2" component="p">
                      Cocktail Generator web application done using HTML, CSS, Javascript, materialize and cocktailDB Api. 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small" >Learn More</Button> */}
                    <Link
                      href="https://github.com/emad998/mern-cheftorescue"
                      color="secondary"
                      className={classes.linkStyle}
                    >
                      Github Repo
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
