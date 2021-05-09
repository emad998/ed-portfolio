import React from "react";
import { CssBaseline } from "@material-ui/core";
import NavigationToolbar from "./NavigationToolbar";
import Introduction from './Introduction'
import Projects from './Projects'
import ProjectsAnimation from './ProjectsAnimation'
import AboutAnimation from './AboutAnimation'
import About from './About'



function Home() {
  
  return (
    <div>
      <CssBaseline />
      <NavigationToolbar />
      <div style={{backgroundColor: "white"}}>
     <Introduction />
    
     <ProjectsAnimation />
     <Projects />
    <AboutAnimation />
    <About />

     </div>
      
    </div>
  );
}

export default Home;
