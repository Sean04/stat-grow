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
import AppDrawer from './components/AppDrawer.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#eceff1',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#ebebeb',
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(14)
  },
  toolbar: theme.mixins.toolbar
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className="App">
        <MuiAppBar />
        <AppDrawer />
        <div className={classes.toolbar} />
        <main className={classes.content}>
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
        </main>
      </div>
    </Router>
  );
}

export default App;
