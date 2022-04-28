import React, {useEffect, useState} from 'react'
import Landscapecard from './Landscapecard';
import Toppost from "./Toppost";
import AdvertisementCommon from './AdvertisementCommon';
import "./stylehome.css"
import axios from "axios"
import {RotatingLines} from "react-loader-spinner"

const Fitness = () => {
  const [state, setstate] = useState("");
  const [isLoading, setLoading] = useState(true);


 
  useEffect(() => {
    
   axios.get("https://reactprojectbackend.herokuapp.com/api/v1/fitness").then((res) => {
     const data = res.data;
     setstate(data);
     setLoading(false)
   });
   
  }, [])
  

  if(isLoading){
    return (<div className='spinner'><RotatingLines color='green' /></div>)
  }
  else
  return (
    <div className='tourism'><br/><br/><br/><br/>
      <div className='subheading'><h1>Fitness</h1><hr/></div><br/><br/><hr className='line'/><br/>
    <div className='box-2'>
    {state.map((e) => {return (<Landscapecard  key= {e.id} id = {e.id} detail = {e.detail} img = {e.img} subhead = {e.subhead} content = {e.content} type = {e.type} created = {e.created}/>)})}
   <br/><br/>
    <AdvertisementCommon />
    <div className='toppostt'><h1>Top Posts</h1><hr/></div>
    <div className='common-toppost'>
    {state.map((e) => {return (<Toppost  key= {e.id} id = {e.id} detail = {e.detail} img = {e.img} subhead = {e.subhead} type = {e.type} created = {e.created}/>)})}
    </div> </div>
   

    </div>
  )
}

export default Fitness