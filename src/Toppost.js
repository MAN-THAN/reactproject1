import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Landscapecard(props) {
  return (
    <Card sx={{ maxWidth:350, margin : 3, maxHeight : 200, textAlign : "top", justifyContent : "center"}}>
      <Link to = {`/Category/${props.type}/Article/${props.id}`} style={{textDecoration : "none", color : "black"}}>
      <CardActionArea sx={{ display : "flex", flexDirection : "row" }}>
        <CardMedia
          component="img"
          height="90"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle2" component="div">
            {props.subhead}
          </Typography>
          <Typography variant="p" color="text.secondary">
           {props.content}
          </Typography>
          <Typography sx={{ margin : 1, opacity : 0.9, display : "inline-block"}} variant="p" gutterBottom component="div">
      { props.type}  
      </Typography>
      <Typography sx={{  opacity : 0.3, display : "inline-block"}} variant="p" gutterBottom component="div">
      {" / " +props.created}
      </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
  );
}