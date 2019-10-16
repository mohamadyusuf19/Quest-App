import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContentContainer from "../container/content/ContentContainer";
import HomeContainer from "../container/home/HomeContainer";
import "./routes.scss";
import ResultContainer from "../container/result/ResultContainer";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import withPageView from "../container/hoc/withPageView";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={withPageView(HomeContainer)} />
          <Route path="/result" component={withPageView(ResultContainer)} />
          <Route path="/:id" component={withPageView(ContentContainer)} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
