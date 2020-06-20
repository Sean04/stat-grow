import React from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Button,
    IconButton
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { makeStyles } from '@material-ui/styles';
import 'typeface-roboto';
import { TiLeaf } from 'react-icons/ti';
import GitHubIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
    typographyStyles: {
        flex: 1
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    
    button: {
        margin: theme.spacing(1)
    }
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
                    className={classes.button}
                    variant="contained"
                    color="secondary"
                    startIcon={<DashboardIcon />}
                    href="/">
                    Home
                </Button>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="secondary"
                    startIcon={<InfoIcon />}
                    href="/about">
                    About
                </Button>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="secondary"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/Sean04">
                    GitHub
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default MuiAppBar;