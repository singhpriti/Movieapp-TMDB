import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./componants/Header";

import Favourite from "./componants/Favourite";
import Watched from "./componants/Watched";
import { Add } from "./componants/Add";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";

import './App.css';

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Header />
          {/* switch allow us move around the pages */}
          <Switch>
            <Route exact path="/">
              <Favourite />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/watched">
              <Watched />
            </Route>
          </Switch>
        </Router>
      </GlobalProvider>
    </>

  );
};

export default App;
