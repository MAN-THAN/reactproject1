import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useContext} from 'react';
import { datastore } from './Context';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import PortraitCard from './PortraitCard';
import "./stylehome.css"


const Detail = () => {
    const {id} = useParams();
    console.log(id)

    const data = useContext(datastore)

    
    let y = [];
    

    data.forEach((e) => {
        e.forEach((o) => {
            if(o.id == id){
                y.push(o)
            }
        } )
    })
 
const Obj = y[0];
console.log(Obj)



    return (
        <>
        <div className='details'>
        <Card sx={{ maxWidth: 445 }}>
          <CardMedia
            component="img"
            height="340"
            image={Obj.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {Obj.subhead}
            </Typography>
            <Typography variant="body1" color="text.secondary">
             {Obj.content}
            </Typography><br></br>
            <Typography style = {{display : "block", wordWrap : "break-word"}}variant="body1" color="text.secondary">
             {Obj.detail}
            </Typography><br></br><br></br><br></br>
            <Typography variant="body1" align='center' color= "black">
                Date Created : 
            </Typography>
           
            <Typography variant="h4" align='center' color="green">
             {Obj.created}
            </Typography>
          </CardContent>
          <Stack spacing={1} >
      <Rating name="half-rating" style = {{display: "flex", justifyContent:"center"}} defaultValue={2.5} precision={0.5} />
      
    </Stack>
         
          
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </div>
       <div className='yebhi'>
        <div className='subheading'><h1>More From The Siren</h1><hr/></div>
        <div className='box'>
    {data[0].slice(3, 6).map((e) => {return (<PortraitCard key= {e.id} id = {e.id} detail = {e.detail} img = {e.img} subhead = {e.subhead} content = {e.content} type = {e.type} created = {e.created}/>)})}
    </div>
    </div>
    
        </>

      );
    }

export default Detail