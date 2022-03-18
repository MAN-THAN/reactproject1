import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import {makeStyles} from "@material-ui/core"

const useStyles =makeStyles((theme) => ({
  root : {
    
    [theme.breakpoints.down(1025)] : { width: 300}
      
    
  }
}));

export default function Landscapecard(props) {
  const classes = useStyles();
  

  return (
    <Card className={classes.root} sx={{ maxWidth:350, margin : 3, maxHeight : 134, textAlign : "top", justifyContent : "center"}}>
      <Link to = {`/Category/${props.type}/Article/${props.id}`} style={{textDecoration : "none", color : "black"}}>
      <CardActionArea sx={{ display : "flex", flexDirection : "row" }}>
        <CardMedia 
          component="img"
          height="100"
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