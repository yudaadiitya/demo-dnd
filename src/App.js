import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import DesainB from "./Desain1";
import DesainA from "./Desain3";
// import DesainC from "./Desain2";


function App() {
  return (
    <Router>
        <Route exact path="/demo-dnd" component={Home} />
        <Route path="/demo-dnd/desain-b" component={DesainB}/>
        <Route path="/demo-dnd/desain-a" component={DesainA}/>
        {/* <Route path="/desain-c" component={DesainC}/> */}
    </Router>
  );
}

export default App;
