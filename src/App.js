import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import Login from "./components/pages/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddCar from "./components/cars/AddCar";
import EditCar from "./components/cars/EditCar";
import Car from "./components/cars/Car";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cars/add" component={AddCar} />
          <Route exact path="/cars/edit/:id" component={EditCar} />
          <Route exact path="/cars/:id" component={Car} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
