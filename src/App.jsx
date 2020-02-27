import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import SideBar from './components/SideBar';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/news/:slug" component={SideBar} />
        <Redirect to="/news/newsPDF" />
      </Switch>
    </Router>
  );
}

export default App;
