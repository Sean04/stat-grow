import React from 'react'

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    Typography,
    Card    
} from '@material-ui/core';

export default function About() {
    return (
        <Container>
            <Typography variant="h3">About</Typography>
            <Typography variant="body1">
                A simple React.JS app to display and analyse data logged using Arduinos
                about indoor plants.
                
            </Typography>
        </Container>
    )
}
