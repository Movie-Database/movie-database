import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import SignUp from "./components/login/signup";
import Sidebar from "./components/dashboard/sidebar";
import Playall from "./components/pages/playall";
import Uploads from "./components/pages/uploads";
import Deleted from "./components/pages/deleted";
import Navbar from "./components/dashboard/navbar";
import Dashboard from "./components/pages/dashboard";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" ><Login /></Route>
        <Route path="/signup"><SignUp /></Route>
        <Route path="/sidebar"><Sidebar/></Route>
        <Route path="/playall"><Playall/></Route>
        <Route path="/uploads"><Uploads/></Route>
        <Route path="/deleted"><Deleted/></Route>
        <Route path="/navbar"><Navbar/></Route>
        <Route path="/dashboard"><Dashboard/></Route>
      </Switch>
    </Router>
  );
}

export default App;