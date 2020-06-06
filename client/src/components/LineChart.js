import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

import { Button } from '@material-ui/core';

const dev_env = true;

export default function LineChart(props) {
    const [ state, setState ] = useState({
        options: {
            chart: {
                id: "basic-line",
                // background: "#fff"
            },
            title: {
                text: props.title
            },
            xaxis: {
                type: 'datetime',
                categories: []
            }
        },
        series: [
            {
                name: props.title,
                data: []
            }
        ]
    });

    // useEffect(() => {
    //     updateData();
    // });

    const updateData = (period) => {
        console.log("Updating data...");
        
        let fetch_url;
        if (dev_env){
            fetch_url = 'http://localhost:5000/api/data';
        } else {
            fetch_url = '/api/data';
        };

        const fetch_url_params = fetch_url.concat('/?hours=',period);

        console.log('fetch_url: ');
        console.log(fetch_url_params);

        fetch(fetch_url_params)
        .then(response => response.json())
        .then(new_data => {
            const graphDataPoints = []
            new_data.forEach((item, index) => {
                // Date string parsing
                var date_string = item.Date.slice(0, item.Date.length-2);
                date_string = date_string.concat("Z");
                const d = new Date(date_string);
                const t = d.getTime();

                switch(props.title) {
                    case "Temperature":
                        graphDataPoints.push([t, item.Temperature]);
                        break;
                    case "Humidity":
                        graphDataPoints.push([t, item.Humidity]);
                        break;
                    case "Light":
                        graphDataPoints.push([t, item.Light]);
                        break;
                    default:
                        graphDataPoints.push([t, item.Temperature]);
                }
            });

            console.log(graphDataPoints);

            setState({
                options: state.options,
                series: [
                    {
                        name: props.title,
                        data: graphDataPoints.slice(0, graphDataPoints.length)
                    }
                ]
            });
            console.log(state.series.data);
        });
    }

    return (
        <div>
            <Chart
                options={state.options}
                series={state.series}
                type="line"
                width="100%"
            />
            <Button onClick={updateData}>Update</Button>
            <Button onClick={() => updateData('24')}>1 Day</Button>
        </div>
    )
}
