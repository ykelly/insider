import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Community from './components/community';
import * as serviceWorker from './serviceWorker';
import Post from './components/community/post';
import About from './components/About';
import Welcome from './components/Welcome';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthContext';


const routing = (
  <Router>
    <div>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component = {App} />
          <Route path = "/welcome" component = {Welcome} />
          <Route path = "/community" component = {Community}/>
          <Route path = "/about" component = {About} />
          <ProtectedRoute path = "/post" component = {Post} />
        </Switch>
      </AuthProvider>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
