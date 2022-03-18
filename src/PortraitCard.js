import * as React from 'react';
import { Link } from 'react-router-dom'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {makeStyles} from "@material-ui/core"

const useStyles =makeStyles((theme) => ({
  root : {
    
    [theme.breakpoints.down(1025)] : {  width : 350}
      
    
  }
}));

export default function PortraitCard(props) {
  const classes = useStyles();
  return (
    
    <Card  className={classes.root} sx={{ maxWidth: 300 , margin : 3, maxHeight : 450}}>
      <Link to = {`/Category/${props.type}/Article/${props.id}`} style={{textDecoration : "none", color : "black"}}>
      <CardActionArea>
      <CardMedia 
        component="img"
        height="200"
        image={props.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.subhead}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.content}
        </Typography>
      </CardContent>
      <Typography sx={{ margin : 1, opacity : 0.9, display : "inline-block"}} variant="subbtitle2" gutterBottom component="div">
      { props.type}  
      </Typography>
      <Typography sx={{  opacity : 0.5, display : "inline-block"}} variant="subtitle2" gutterBottom component="div">
      {" / " +props.created}
      </Typography>
      </CardActionArea>
      </Link>
    </Card>
   
  );
}