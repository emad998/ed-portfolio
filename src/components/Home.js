import React from "react";
import { CssBaseline } from "@material-ui/core";
import NavigationToolbar from "./NavigationToolbar";
import Introduction from './Introduction'



function Home() {
  
  return (
    <div>
      <CssBaseline />
      <NavigationToolbar />
     <Introduction />
      
    </div>
  );
}

export default Home;
