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
    Grid,
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
        <Grid container alignItems="flex-start">
          <Grid item xs={12}>
            {/* <Typography variant="h4"> Overview</Typography> */}
          </Grid>
          <Grid item xs={6}>
            <Chart
                options={state.options}
                series={state.series}
                type="radialBar"
                width="100%" />
          </Grid>
          <Divider orientation='vertical' flexItem />
          <Grid item xs={5}>
            <Typography>Weather</Typography>
          </Grid>
        </Grid>
      </Card>
    )
}
