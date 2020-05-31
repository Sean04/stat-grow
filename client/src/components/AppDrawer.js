import React from 'react'
import {
    Button,
    Drawer,
    List
} from '@material-ui/core';

export default function AppDrawer() {
    const [ state, setState ] = React.useState(false);

    const toggleDrawer = (open) => {
        setState(open);
    }

    return (
        <div>
            <Drawer
                variant="permanent"
            >
                <List>
                    List
                </List>
            </Drawer>
        </div>
    )
}
