import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/main.css";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/404' exact component={Notfound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
