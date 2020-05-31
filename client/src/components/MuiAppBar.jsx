import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { makeStyles } from '@material-ui/styles';
import 'typeface-roboto';

const useStyles = makeStyles((theme) => ({
    typographyStyles: {
        flex: 1
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 100,
      },
}));

const MuiAppBar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Typography className={classes.typographyStyles} variant="h4">
                    StatGrow
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DashboardIcon />}
                    href="/">
                    Home
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default MuiAppBar;