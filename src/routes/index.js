import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContentContainer from '../container/content/ContentContainer';
import HomeContainer from '../container/home/HomeContainer';
import './routes.scss';
import ResultContainer from '../container/result/ResultContainer';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import withPageView from '../container/hoc/withPageView';
import SecureRoute from '../components/secureRoute';
import AuthContextProvider, { AuthContext } from '../auth/AuthContext';
import Callback from '../container/callback';
import Profile from '../container/Profile';

class Routes extends Component {
  render() {
    return (
      <Router>
        <AuthContextProvider>
          <AuthContext.Consumer>
            {(auth) => (
              <>
                <Header />
                <Switch>
                  <Route
                    exact
                    path='/'
                    component={withPageView(HomeContainer)}
                  />
                  <Route
                    path='/callback'
                    render={(props) => <Callback auth={auth} {...props} />}
                  />
                  {auth.isAuthenticated() && (
                    <SecureRoute
                      path='/profile'
                      auth={auth}
                      component={withPageView(Profile)}
                    />
                  )}
                  {auth.isAuthenticated() && (
                    <SecureRoute
                      path='/result'
                      auth={auth}
                      component={withPageView(ResultContainer)}
                    />
                  )}
                  {auth.isAuthenticated() && (
                    <SecureRoute
                      exact
                      path='/:id'
                      auth={auth}
                      component={withPageView(ContentContainer)}
                    />
                  )}
                </Switch>
                <Footer />
              </>
            )}
          </AuthContext.Consumer>
        </AuthContextProvider>
      </Router>
    );
  }
}

export default Routes;
