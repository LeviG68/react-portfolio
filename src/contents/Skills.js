import React, { Component } from 'react';
// import data from'../Data/data';

// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import Chip from '@material-ui/core/Chip';

 class Skills extends Component{
    render() {
        const { data } = this.props;

        const skillsList = data.map(skill => {
            return(
            <li>{skill.skill}</li>
            )
        })
        // console.log(this.props.data)
        return(
            <ul>
                {skillsList}
            </ul>
        )
    }
 }
 export default Skills