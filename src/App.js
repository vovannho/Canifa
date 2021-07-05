import './assets/css/dist/tailwind.css';
import React  from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import HomeCanifa from './pages/Canifa/HomeCanifa';
import HeaderCanifa from './components/HeaderCanifa';
import FooterCanifa from './components/FooterCanifa';
import ProductnewHomepage from './components/ProductnewHomepage';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={`/HomeCanifa`}
          component={HomeCanifa}
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
      </Switch>
    </BrowserRouter>
  )
}

export default App;
