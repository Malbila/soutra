import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Header from './components/Header';
import GlobalStyle from './utils/style/GlobalStyle';
import Error from './pages/Error';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Edit from './pages/Edit'
import AddArticle from './pages/AddArticle'
//import Footer from './components/Footer';
import Contacts from './pages/Contacts';
import GetCategory from './components/GetCategory';
import Category from './pages/Category';
import Pointure from './components/Pointure';
import AddSameCategory from './pages/AddSameCategory';

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
        <Route exact path="/articles">
          <Articles />
        </Route> 
        <Route exact path="/categories/item-:name/:id">
          <Article />
        </Route>
        <Route exact path="/categories/item-:name/:id/edit">
          <Edit />
        </Route>
        <Route exact path="/articles-post">
          <AddArticle /> 
        </Route>
        <Route exact path="/:category-add">
          <AddSameCategory /> 
        </Route>
        <Route exact path="/contacts">
            <Contacts /> 
        </Route>
        <Route exact path="/categories">
            <GetCategory /> 
        </Route>
        <Route exact path="/categories/:categoryName">
            <Category /> 
        </Route>
        <Route exact path="/categories/:categoryName/:pointure">
            <Pointure /> 
        </Route>
        <Route path="">
          <Error />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);