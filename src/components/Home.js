import React from "react";
import { CssBaseline } from "@material-ui/core";
import NavigationToolbar from "./NavigationToolbar";
import Introduction from './Introduction'
import Projects from './Projects'
import ProjectsAnimation from './ProjectsAnimation'
import AboutAnimation from './AboutAnimation'
import About from './About'
import ContactAnimation from './ContactAnimation'
import Contact from './Contact'
import Footer from './Footer'




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
    <ContactAnimation />
    <Contact />
    </div>

     
     <Footer />
      
    </div>
  );
}

export default Home;
