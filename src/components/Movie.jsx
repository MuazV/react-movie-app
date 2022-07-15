import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import NotFound from '../assets/NotFound.png';
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 400,
      "&:hover $media": {
        opacity: 0.5,
        tranform: "translateY(-100%)"
      
    },
  },
});

export default function ActionAreaCard({itemm}) {
    const navigate = useNavigate()

    const {title, poster_path:path, overview} = itemm;
    const classes = useStyles();

  return (
    <Card 
    className={classes.root}
    onClick={() => navigate("MovieDetail")}
    >
      <CardActionArea className={classes.action}>
        <CardMedia
          component="img"
          image={ path ? `https://image.tmdb.org/t/p/w300/${path}` : NotFound } 
        />
        <CardContent sx ={{bgcolor : "#3f51b5"}} className={classes.media}>
          <Typography gutterBottom variant="h5" component="div"  color="white" >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
