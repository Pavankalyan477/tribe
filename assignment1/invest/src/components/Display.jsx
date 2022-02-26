import React, {  useEffect, useState } from 'react'
import axios from "axios";

export default function Display() {
    const [data,setData]=useState([]);

    const fetchData= async ()=>{
        const result= await axios.get('http://gov.uk/bank-holidays.json');
       console.log("data",result)
       setData(result);
    }
    
    useEffect(() => {
      fetchData();
      }, [])
      console.log(data);
    
  return (
    <div>

    </div>
  )
}
