import React, { useState, useEffect } from 'react';
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

const dev_env = false;

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
    const [data, setData] = useState({
        Temperature: 0,
        Humidity: 0,
        Soil_Moisture: 0,
        Light: 0,
        Date: Date.now()
    });
    
    useEffect(() => {
        updateData();
    }, []);

    const classes = useStyles();

    const updateData = () => {
        let fetch_url;
        if (dev_env){
            fetch_url = 'http://localhost:5000/api/data';
        } else {
            fetch_url = '/api/data';
        };

        // Production fetch
        fetch(fetch_url)
        .then(response => response.json())
        .then(new_data => {
            const new_state = new_data[new_data.length-1]

            // Date string parsing
            console.log(new_state.Date);
            var date_string = new_state.Date.slice(0, new_state.Date.length-1);
            date_string = date_string.concat("+10:00");
            console.log(date_string);
            const d = new Date(date_string);
            const t = d.toString();
            console.log(t);
            new_state.Date = t;

            setData(new_state);
        });
    };

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
                            <ListItemText primary="Room Temperature:" secondary={data.Temperature} />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <RiMistLine />
                            </ListItemAvatar>
                            <ListItemText primary="Humidity:" secondary={data.Humidity} />
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
                            <ListItemText primary="Soil Moisture:" secondary={data.Soil_Moisture} />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <FaSun />
                            </ListItemAvatar>
                            <ListItemText primary="Light:" secondary={data.Light} />
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
