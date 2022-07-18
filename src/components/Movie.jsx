import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import NotFound from '../assets/NotFound.png';
import { useNavigate } from 'react-router-dom';



export default function ActionAreaCard({itemm}) {
    const navigate = useNavigate()

    const {title, poster_path:path, overview} = itemm;

  return (
    <Card 
    onClick={() => navigate("/Main")}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={ path ? `https://image.tmdb.org/t/p/w300/${path}` : NotFound } 
        />
        <CardContent sx ={{bgcolor : "#3f51b5"}}>
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
