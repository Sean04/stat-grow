import React from 'react'
import {
    Button,
    ListItem,
    ListItemText,
    ListSubheader,
    Divider,
    Drawer,
    List,
    Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },

    drawerPaper: {
        width: drawerWidth
    },

    toolbar: theme.mixins.toolbar,

}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function AppDrawer() {
    const [ state, setState ] = React.useState(false);

    const toggleDrawer = (open) => {
        setState(open);
    }

    const classes = useStyles();
    return (
        <Drawer
            variant="permanent"
            className={classes.drawer}
            anchor="left"
        >
            <div className={classes.toolbar} />
                <Divider />
                <List>
                    <ListSubheader>
                        Rooms
                    </ListSubheader>
                    <ListItemLink href="/ctenanthe">
                        <ListItemText primary="Bedroom" />
                    </ListItemLink>
                    <ListItemLink href="/ctenanthe">
                        <ListItemText primary="Bathroom" />
                    </ListItemLink>
                    <ListItemLink href="/ctenanthe">
                        <ListItemText primary="Study" />
                    </ListItemLink>
                    <Divider />
                    <ListSubheader>
                        Plants
                    </ListSubheader>
                    <ListItemLink href="/ctenanthe">
                        <ListItemText primary="Ctenanthe" />
                    </ListItemLink>
                    <ListItemLink href="/ctenanthe">
                        <ListItemText primary="Leatherleaf" />
                    </ListItemLink>
                    <ListItemLink href="/ctenanthe">
                        <ListItemText primary="Lily" />
                    </ListItemLink>
                    <ListItemLink href="/ctenanthe">
                        <ListItemText primary="Pixie" />
                    </ListItemLink>
                    <ListItemLink href="/ctenanthe">
                        <ListItemText primary="Diffenbachia" />
                    </ListItemLink>
                    <ListItemLink href="/ctenanthe">
                        <ListItemText primary="Tradescantia" />
                    </ListItemLink>
                </List>
        </Drawer>
    )
}
