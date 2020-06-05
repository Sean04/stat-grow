import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { makeStyles } from '@material-ui/styles';
import 'typeface-roboto';
import { TiLeaf } from 'react-icons/ti';

const useStyles = makeStyles((theme) => ({
    typographyStyles: {
        flex: 1
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));

const MuiAppBar = () => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography className={classes.typographyStyles} variant="h4">
                    <TiLeaf/>
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