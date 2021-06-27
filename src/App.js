import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import DesainB from "./Desain1";
import DesainA from "./Desain3";
import instruction1 from "./instruction1"
import instruction2 from "./instruction2"
import instruction3 from "./instruction3"
// import DesainC from "./Desain2";


function App() {
  return (
    <Router>
        <Route exact path="/demo-dnd" component={Home} />
        <Route path="/demo-dnd/instruction-a" component={instruction1}/>
        <Route path="/demo-dnd/instruction-b" component={instruction2}/>
        <Route path="/demo-dnd/instruction-c" component={instruction3}/>
        <Route path="/demo-dnd/desain-b" component={DesainB}/>
        <Route path="/demo-dnd/desain-a" component={DesainA}/>
        {/* <Route path="/desain-c" component={DesainC}/> */}
    </Router>
  );
}

export default App;
