import React, { useState } from 'react';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    Typography,
} from '@material-ui/core';

import PlantCard from './PlantCard';
import greystar from '../img/greystar.jpg';
import fern from '../img/fern.jpg';
import lily from '../img/lily.jpg';
import pixie from '../img/pixie.jpg';
import dieff from '../img/dieff.jpg';
import trad from '../img/trad.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
        // background: '#eceff1'
        flexGrow: 1
    },

    toolbar: theme.mixins.toolbar,

    card: {

    },
    
    media: {
    }

}));

export default function Welcome() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>

            <Typography variant="h2">Welcome</Typography>
            <br></br>
            <Grid container justify="center" spacing={2}>
                <Grid item xs={4}>
                    <PlantCard name="Ctenanthe Greystar" img={greystar} about="https://www.flowerpower.com.au/ctenanthe-grey-star-9326974060934p"/>
                </Grid>
                <Grid item xs={4}>
                    <PlantCard name="Leatherleaf Fern" img={fern} about="https://www.flowerpower.com.au/leather-fern-9324228001214"/>
                </Grid>
                <Grid item xs={4}>
                    <PlantCard name="Peace Lily" img={lily} about="https://www.flowerpower.com.au/spathiphyllum-romano-173774p"/>
                </Grid>
                <Grid item xs={4}>
                    <PlantCard name="Syngonium Pixie" img={pixie} about="https://www.flowerpower.com.au/syngonium-pixie-1556290125p"/>
                </Grid>
                <Grid item xs={4}>
                    <PlantCard name="Dieffenbachia" img={dieff} about="https://www.flowerpower.com.au/dieffenbachia-tropic-marianne-1663280180p"/>
                </Grid>
                <Grid item xs={4}>
                    <PlantCard name="Tradescantia Tricolour" img={trad} about="https://www.flowerpower.com.au/tradescantia-tricolour-9324228000965"/>
                </Grid>
            </Grid>
        </Container>
    )
}