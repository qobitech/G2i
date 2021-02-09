import React, { lazy, Suspense } from 'react';
import { ReactNode } from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Style
import { GlobalStyle } from './App.style'
//url
import { pageurl } from './pageurl/pageurl'
//Pages
import WelcomePage from './pages/WelcomePage'
import TriviaPage from './pages/TriviaPage'
import ResultPage from './pages/ResultPage'
//404
import Page404 from './pages/Page404'

const App = () => {
  return (
    <Router>
      <GlobalStyle/>
      <Switch>  
        <Route render={() => <WelcomePage/> } exact path={ pageurl.home }/>
        <Route render={() => <TriviaPage/> } exact path={ pageurl.triviapage }/>
        <Route render={() => <ResultPage/> } exact path={ pageurl.scorepage }/>
        <Route render={() => <Page404/> }  path={ "*" }/>
      </Switch>
    </Router>
  );
}

export default App;
