import React, {useContext} from 'react'
import { datastore } from './Context';
import Landscapecard from './Landscapecard';
import Toppost from "./Toppost";
import AdvertisementCommon from './AdvertisementCommon';
import "./stylehome.css"

const Fitness = () => {
  const data = useContext(datastore);
  return (
    <div id='tourism'><br/><br/><br/><br/>
      <div className='subheading'><h1>Fitness</h1><hr/></div><br/><br/><hr className='line'/><br/>
    <div className='box-2'>
    {data[4].map((e) => {return (<Landscapecard  key= {e.id} id = {e.id} detail = {e.detail} img = {e.img} subhead = {e.subhead} content = {e.content} type = {e.type} created = {e.created}/>)})}
    </div><br/><br/>
    <AdvertisementCommon />
    <div className='toppostt'><h1>Top Posts</h1><hr/></div>
    <div className='common-toppost'>
    {data[4].map((e) => {return (<Toppost  key= {e.id} id = {e.id} detail = {e.detail} img = {e.img} subhead = {e.subhead} type = {e.type} created = {e.created}/>)})}
    </div>
   

    </div>
  )
}

export default Fitness