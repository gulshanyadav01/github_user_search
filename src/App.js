// import Hello from "./Hello"
import Followers from "./components/Followers"
import Info from "./components/Info"
import User from "./components/User"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Repos from "./components/Repos"; 
import Search from "./components/Search"
import Navbar from "./components/Navbar"
import {GithubContext} from "./Context/Context";
import loadingGif from "./Asset/images/loading1.gif";
import React from "react";

// import Popular from "./components/Popular"
const  App = () => {
  const {isLoading} = React.useContext(GithubContext);
  if(isLoading){
    return(
    <Router>
    <div className="App h-auto" style = {{backgroundColor:"#0E1122"}}  >
      <div className = "ml-20 mr-20 " style = {{backgroundColor:"#0E1122"}}>
        <Navbar/>
        <Search/>
        <img src = {loadingGif} alt = "loading" style = {{backgroundColor:"black"}} />
      </div>
    </div>
    </Router>

    )
    
  }
  else{
    return (
      <Router>
      <div className="App h-auto" style = {{backgroundColor:"#0E1122"}}  >
        <div className = "ml-20 mr-20 " style = {{backgroundColor:"#0E1122"}}>
          <Navbar/>
          <Search/>
          <User/>
          <Info/>
          <Repos/>
        </div>
      </div>
      </Router>
    );

  }
  
}

export default App;
