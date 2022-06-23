import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Searched = () => {

    const param = useParams();
    console.log(param.search)
    useEffect(()=>{

    },[]);
    
  return (
    <div>{param.search}</div>
  )
}

export default Searched