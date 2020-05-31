import React, {useState} from 'react';
import Chart from 'react-apexcharts';

import { Button } from '@material-ui/core';

export default function TemperatureChart() {
    const [ state, setState ] = useState({
        options: {
            chart: {
                id: "basic-line",
                // background: "#fff"
            },
            title: {
                text: "Temperature"
            },
            xaxis: {
                type: 'datetime',
                categories: []
            }
        },
        series: [
            {
                name: "temperature",
                data: []
            }
        ]
    });

    const updateData = () => {
        fetch('http://localhost:5000/api/data')
        .then(response => response.json())
        .then(new_data => {
            const graphDataPoints = []
            new_data.forEach((item, index) => {
                // Date string parsing
                var date_string = item.Date.slice(0, item.Date.length-2);
                date_string = date_string.concat("Z");
                const d = new Date(date_string);
                const t = d.getTime();

                graphDataPoints.push([t, item.Temperature]);
            });

            console.log(graphDataPoints);

            setState({
                options: state.options,
                series: [
                    {
                        name: "Temperature",
                        data: graphDataPoints.slice(graphDataPoints.length-100, graphDataPoints.length)
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
        </div>
    )
}
