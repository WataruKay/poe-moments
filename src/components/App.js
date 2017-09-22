import React, { Component } from 'react';
import { Route, Link, withRouter, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import '../styles/App.css';

import Topbar from './Topbar'
import MomentList from './MomentList';
import Landing from './Landing';

const Layout = ({ children }) => (
  <section className="App">
   <Topbar />
    {children}
  </section>
)
const PageFade = (props) => (
  <CSSTransition
    {...props}
    classNames="fadeTranslate"
    timeout={1000}
    mountOnEnter={true}
    unmountOnExit={true}
  />
)

const App = (props) => {
  const locationKey = props.location.pathname

  return (
    <Layout>
      <TransitionGroup>
        <PageFade key={locationKey}>
          <section className="fix-container">
            <Switch location={props.location}>
              <Route exact path="/" component={Landing} />
              <Route exact path="/momentlist" component={MomentList} />
            </Switch>
          </section>
        </PageFade>
      </TransitionGroup>
    </Layout>
  )
}

export default App;
