import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Header from './components/Header';
import GlobalStyle from './utils/style/GlobalStyle';
import Error from './components/Error';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Edit from './components/Edit'
import AddArticle from './components/AddArticle'
import Footer from './components/Footer';
import Contacts from './pages/Contacts';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        {sessionStorage.getItem('token') && 
        <div>
          <Route exact path="/articles">
            <Articles />
          </Route> 
          <Route exact path="/articles/:id">
            <Article />
          </Route>
          <Route exact path="/articles/:id/edit">
            <Edit />
          </Route>
          <Route exact path="/articles-post">
            <AddArticle /> 
          </Route>
          <Route exact path="/contacts">
            <Contacts /> 
          </Route>
        </div>}
        <Route exact path="/contacts">
            <Contacts /> 
          </Route>
        <Route path="">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
