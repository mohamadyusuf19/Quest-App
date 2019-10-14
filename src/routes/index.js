import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContentContainer from "../container/content/ContentContainer";
import HomeContainer from "../container/home/HomeContainer";
import "./routes.scss";
import ResultContainer from "../container/result/ResultContainer";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

class Routes extends Component {
  // componentWillReceiveProps(prevState, prevProps) {
  //   console.log(prevState, prevProps);
  //   // const { answer } = this.props.content;
  //   // const pos = answer.map(e => e.number).indexOf(data.length);
  //   // console.log("pos", pos);
  // }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/result" component={ResultContainer} />
          <Route path="/:id" component={ContentContainer} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
