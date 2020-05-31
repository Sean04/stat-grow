import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Material UI
import { makeStyles } from '@material-ui/core/styles';

import MuiAppBar from './components/MuiAppBar';
import Dashboard from './components/Dashboard';
import Welcome from './components/Welcome';
import AppDrawer from './components/AppDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#eceff1',
    minHeight: '1000'
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className="App">
        <MuiAppBar />
        {/* <AppDrawer /> */}
        <Switch>
          <Route path="/ctenanthe">
            <Dashboard name="Ctenanthe" />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
