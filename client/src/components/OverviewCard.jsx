import React, { useState, useEffect } from 'react';
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

import Chart from 'react-apexcharts';

import LineChart from './LineChart';



const useStyles = makeStyles({
    root: {

    }
})

export default function OverviewCard() {
    const classes = useStyles();

    const [ state, setState] = useState({
        options: {
            chart: {
                height: 280,
                type: "radialBar",
              },
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    total: {
                      show: true,
                      label: 'TOTAL'
                    }
                  }
                }
              }
        },
        series: [67, 84, 97, 61],
        labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D']
    })

    return (
        <Card className={classes.root}>
            <Typography>Overview</Typography>
            <div>
                <Chart
                    options={state.options}
                    series={state.series}
                    type="radialBar"
                    width="50%" />
            </div>
            {/* <Divider orientation='vertical' flexItem /> */}
            <div>
                {/* <LineChart title="Temperature" /> */}
            </div>
        </Card>
    )
}
