import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  Typography
} from '@material-ui/core';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

import MuiAppBar from './components/MuiAppBar';
import Dashboard from './components/Dashboard';
import Welcome from './components/Welcome';
import AppDrawer from './components/AppDrawer.jsx';
import About from './components/About';

function Copyright() {
  return (
    <Typography vairant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Sean04">
        {'Sean Watt '}
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

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
  toolbar: theme.mixins.toolbar,

  footer: {

  }
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
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
                <Welcome />
            </Route>
          </Switch>
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Stat Grow
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            {/* Created by Sean Watt */}
          </Typography>
          <Copyright />
        </footer>
      </div>
    </Router>
  );
}

export default App;
