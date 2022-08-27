import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Product from "./Product";
import Contact from "./Contact";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
