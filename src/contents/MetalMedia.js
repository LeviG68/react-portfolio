import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MetalMedia from '../images/logos.png';
    

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Metal Media Fabrication"
          height= "160"
          image={MetalMedia}
          title="Metal Media Fabrications"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Metal Media Fabrication
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Metal Media Fabrication is a landing page for a small company that is desigining and developing all metal hand raillings, handles, fire pits and landscape lawn art.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="http://metalmediafab.com/">
          Link to Site
        </Button>
      </CardActions>
    </Card>
  );
}