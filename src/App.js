import './assets/css/dist/tailwind.css';
import React  from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import HomeCanifa from './pages/Canifa/HomeCanifa';
import StoreCanifa from './pages/Canifa/StoreCanifa';
import LoginCanifa from './pages/Canifa/LoginCanifa';
import ForgotPasswordCanifa from './pages/Canifa/ForgotPasswordCanifa';
import HeaderCanifa from './components/HeaderCanifa';
import FooterCanifa from './components/FooterCanifa';
import ProductnewHomepage from './components/ProductnewHomepage';
import ListStore from './components/ListStore';
import DemoMarquee from './pages/DemoMarquee';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={`/DemoMarquee`}
          component={DemoMarquee}
        />
        <Route
          exact
          path={`/HomeCanifa`}
          component={HomeCanifa}
        />
        <Route
          exact
          path={`/StoreCanifa`}
          component={StoreCanifa}
        />
        <Route
          exact
          path={`/LoginCanifa`}
          component={LoginCanifa}
        />
        <Route
          exact
          path={`/ForgotPasswordCanifa`}
          component={ForgotPasswordCanifa}
        />
        <Route
          exact
          path={`/HeaderCanifa`}
          component={HeaderCanifa}
        />
        <Route
          exact
          path={`/FooterCanifa`}
          component={FooterCanifa}
        />
        <Route
          exact
          path={`/ProductnewHomepage`}
          component={ProductnewHomepage}
        />
        <Route
          exact
          path={`/ListStore`}
          component={ListStore}
        />
        
      </Switch>
    </BrowserRouter>
  )
}

export default App;
