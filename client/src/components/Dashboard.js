import React, { useState } from 'react';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import { 
    Paper,
    Container,
    Button,
    Grid,
    Card,
    CardContent,
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

import TemperatureChart from './TemperatureChart';
import LineChart from './LineChart';


const useStyles = makeStyles({
    root: {
    },
    
    card: {
        height: 500,
        width: 700
    }
})

export default function Dashboard(props) {
    // Note: For useState the initial state does not matter, only
    // used for reference for variable names.
    const [data, setData] = useState({
        Temperature: 0,
        Humidity: 0,
        Soil_Moisture: 0,
        Light: 0,
        Date: Date.now()
    });
    
    const classes = useStyles();

    const updateData = () => {
        fetch('http://localhost:5000/api/data')
        .then(response => response.json())
        .then(new_data => {
            const new_state = new_data[new_data.length-1]

            // Date string parsing
            var date_string = new_state.Date.slice(0, new_state.Date.length-2);
            date_string = date_string.concat("Z");
            const d = new Date(date_string);
            const t = d.toString();
            new_state.Date = t;

            setData(new_state);
        });
    };

    return (
        <Container >
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <br></br>
                    <Typography variant="h2">{props.name} Dashboard</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Card>
                        <CardContent>
                            <LineChart title="Temperature" />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4">Current Status:</Typography>
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
                            <p>Last updated: {data.Date}</p>
                            <Button color="primary" onClick={updateData}>Update</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={9} justify="flex-end">
                    <Card>
                        <CardContent>
                            <LineChart title="Humidity" />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={9} justify="flex-end">
                    <Card>
                        <CardContent>
                            <LineChart title="Light" />
                        </CardContent>
                    </Card>
                </Grid>
            </ Grid>
        </Container>
    )
}
