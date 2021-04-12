import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tetris from '../images/Tetris.png';
    

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
          alt="Tetris"
          height= "160"
          image={Tetris}
          title="Tetris Game"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Tetris Game
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tetris game built in React.js with Matrial-UI and Styled components. Played with the arrows keys just like the days of playing it with your Nintendo GameBoy.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="########">
          Link to Game
        </Button>
      </CardActions>
    </Card>
  );
}


