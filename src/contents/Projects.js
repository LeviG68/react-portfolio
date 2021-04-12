import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TetrisCard  from './TetrisCard';
import MetalMedia from './MetalMedia';
import FakeStore from './FakeStore';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    gridContainter: {
        paddingLeft: '20px',
        paddingTop: '40px',
        paddingBottom: '20px'
    },

  });

export default function Projects() {

    const classes = useStyles();
    return(
        <Grid container spacing={2} className={classes.gridContainter}>
            <Grid item xs={4}>
                <TetrisCard/>
            </Grid> 
            <Grid item xs={4}>
                <MetalMedia/>
            </Grid> 
            <Grid item xs={4}>
                <FakeStore/>
            </Grid> 
        </Grid>

            
    );
}
