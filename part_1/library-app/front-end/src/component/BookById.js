import React from "react";
import axios from "axois";
import { useEffect } from "react";


export const GitById = ({id}) => {
  useEffect(axios.get(`http://localhost:5000/book/${id}`).then((res)=>{
       console.log("article by id");
  }));
  return( 
  
  <dev></dev>);
};