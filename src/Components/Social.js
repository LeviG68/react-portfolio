import React, { Component } from 'react';

//import of Material-ui icons, themes and colors
import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const customTheme = createMuiTheme ({
    spacing: 2,
    palette: {
        primary: {
            main: '#1DA1F2'
        },
        secondary: {
            main: '#211F1F'
        },
        accent: {
            main: '#2867B2'
        },
    },
    root: {
        paddingLeft: '20px',
        paddingright: '20px',
        display: 'grid',
        

    },
});

class Social extends Component {

    render() {

        // const theme = customTheme();
        
        return (
            <Grid container spacing={1} justify="center">
                <ThemeProvider theme={customTheme}>
                    <Grid item xs={1}>
                        <MailOutlineIcon fontSize="large" spacing={4} className />
                    </Grid>
                    <Grid item xs={1}>
                        <GitHubIcon  fontSize='large' color='secondary' className='github'/>
                    </Grid>
                    <Grid item xs={1}>
                        <TwitterIcon fontSize='Large' color='primary' className='twitter'/>
                    </Grid>
                    <Grid item xs={1}>
                    <LinkedInIcon fontSize='Large' color='accent' className='linkedin' />
                    </Grid>

                </ThemeProvider>
            </Grid>
            
        )
    }
}
export default Social