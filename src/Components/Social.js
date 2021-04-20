import React, { Component } from 'react';

//import of Material-ui icons, themes and colors
import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const customTheme = createMuiTheme ({
    root: {
        paddingLeft: '20px',
        paddingright: '20px',
        display: 'grid'
    },
});

class Social extends Component {

    render() {

        // const theme = customTheme();
        
        return (
            <Grid container spacing={1} justify="center">
                <ThemeProvider theme={customTheme}>
                    <Grid item xs={1}>
                        <Button href='mailto:glendenning.levi@gmail.com'>
                            <MailOutlineIcon fontSize="large" spacing={4}/>
                        </Button>    
                    </Grid>

                    <Grid item xs={1}>
                        <Button href='https://github.com/LeviG68'>
                            <GitHubIcon  fontSize='large' style={{color:'#211F1F'}}/>
                        </Button>
                    </Grid>

                    <Grid item xs={1}>
                        <Button href='https://twitter.com/DevopPeachfuzz'>
                            <TwitterIcon fontSize='Large' style={{color:'#1DA1F2'}} />
                        </Button>
                    </Grid>

                    <Grid item xs={1}>
                        <Button href='https://www.linkedin.com/in/levi-glendenning/'>
                            <LinkedInIcon fontSize='Large'  style={{color:'#2867B2'}} />
                        </Button>
                    </Grid>

                </ThemeProvider>
            </Grid>
            
        )
    }
}
export default Social