import './assets/css/dist/tailwind.css';
import React  from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import HomeCanifa from './pages/Canifa/HomeCanifa';
import StoreCanifa from './pages/Canifa/StoreCanifa';
import LoginCanifa from './pages/Canifa/LoginCanifa';
import WomenProductList from './pages/Canifa/WomenProductList';
import NewProductWomen from './pages/Canifa/NewProductWomen';
import NewProductBoy from './pages/Canifa/NewProductBoy';
import NewProductGirls from './pages/Canifa/NewProductGirls';
import NewProductMen from './pages/Canifa/NewProductMen';
import PriceGoodProductList from './pages/Canifa/PriceGoodProductList';
import GirlsProductList from './pages/Canifa/GirlsProductList';
import MenProductList from './pages/Canifa/MenProductList';
import BoyProductList from './pages/Canifa/BoyProductList';
import ForgotPasswordCanifa from './pages/Canifa/ForgotPasswordCanifa';
import HeaderCanifa from './components/HeaderCanifa';
import FooterCanifa from './components/FooterCanifa';
import ProductnewHomepage from './components/ProductnewHomepage';
import ListStore from './components/ListStore';
import DemoMarquee from './pages/DemoMarquee';
import FilterProduct from './components/FilterProduct';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={`/PriceGoodProductList`}
          component={PriceGoodProductList}
        />
        <Route
          exact
          path={`/NewProductWomen`}
          component={NewProductWomen}
        />
        <Route
          exact
          path={`/NewProductGirls`}
          component={NewProductGirls}
        />
        <Route
          exact
          path={`/NewProductBoy`}
          component={NewProductBoy}
        />
        <Route
          exact
          path={`/NewProductMen`}
          component={NewProductMen}
        />
        <Route
          exact
          path={`/WomenProductList`}
          component={WomenProductList}
        />
        <Route
          exact
          path={`/GirlsProductList`}
          component={GirlsProductList}
        />
        <Route
          exact
          path={`/BoyProductList`}
          component={BoyProductList}
        />
        <Route
          exact
          path={`/MenProductList`}
          component={MenProductList}
        />
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
        <Route
          exact
          path={`/FilterProduct`}
          component={FilterProduct}
        />
        
      </Switch>
    </BrowserRouter>
  )
}

export default App;
