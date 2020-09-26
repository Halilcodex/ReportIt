import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

function RouterMain() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          render={(props) => (
            <MainLayout {...props}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </MainLayout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default RouterMain;
