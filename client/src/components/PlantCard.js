import React from 'react'
// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    CardActions,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Divider
} from '@material-ui/core';

import { FaTemperatureHigh, FaSun } from 'react-icons/fa';
import { GiZigzagLeaf, GiWaterDrop } from 'react-icons/gi';
import { RiMistLine } from 'react-icons/ri';

const useStyles = makeStyles({
    root: {
        // background: '#eceff1'
    },

    card: {

    },
    
    media: {
    }
})

export default function PlantCard(props) {
    const classes = useStyles();

    return (
        <Card>
        <CardActionArea href="/ctenanthe">
            <CardMedia
                className={classes.media}
                component="img"
                image={props.img}
                title={props.name}/>
            <CardContent>
                <Typography variant="h5">{props.name}</Typography>
                <Typography >Current Status:</Typography>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <FaTemperatureHigh/>
                            </ListItemAvatar>
                            <ListItemText primary="Room Temperature:" secondary="0" />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <RiMistLine />
                            </ListItemAvatar>
                            <ListItemText primary="Humidity:" secondary="0" />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <GiZigzagLeaf />
                            </ListItemAvatar>
                            <ListItemText primary="Soil Temperature:" secondary="0" />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <GiWaterDrop />
                            </ListItemAvatar>
                            <ListItemText primary="Soil Moisture:" secondary="0" />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <FaSun />
                            </ListItemAvatar>
                            <ListItemText primary="Light:" secondary="0" />
                        </ListItem>
                    </List>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" href={props.about}>
                About
            </Button>
        </CardActions>
    </Card>
    )
}
