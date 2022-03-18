import React, {useContext} from 'react'
import { datastore } from './Context';
import Landscapecard from './Landscapecard';
import Toppost from "./Toppost";
import AdvertisementCommon from './AdvertisementCommon';
import "./stylehome.css"


const Tourism = () => {
  const data = useContext(datastore);
  return (
    <div className='tourism'><br/><br/><br/><br/>
      <div className='subheading'><h1>Tourism</h1><hr/></div><br/><br/><hr className='line'/><br/>
    <div className='box-2'>
    {data[3].map((e) => {return (<Landscapecard  key= {e.id} id = {e.id} detail = {e.detail} img = {e.img} subhead = {e.subhead} content = {e.content} type = {e.type} created = {e.created}/>)})}
    <br/><br/>
    <AdvertisementCommon />
    <div className='toppostt'><h1>Top Posts</h1><hr/></div>
    <div className='common-toppost'>
    {data[3].map((e) => {return (<Toppost  key= {e.id} id = {e.id} detail = {e.detail} img = {e.img} subhead = {e.subhead} type = {e.type} created = {e.created}/>)})}
    </div></div>
   

    </div>
  )
}

export default Tourism