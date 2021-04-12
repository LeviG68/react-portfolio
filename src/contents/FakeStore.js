import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import fakeStore from '../images/fakeStore.png';
    

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
          alt="Fake Store"
          height= "160"
          image={fakeStore}
          title="Fake Store"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Fake Store
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            An e-commerce and shopping site, built with React & TypeScript. It shows the items for sale along with pictures and prices. All items can be collected to a shopping basket.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="########">
          Link to Site
        </Button>
      </CardActions>
    </Card>
  );
}