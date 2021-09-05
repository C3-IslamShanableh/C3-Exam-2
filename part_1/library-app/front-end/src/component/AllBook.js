import React from "react";
import { useEffect } from "react";
import axios from "axois";

export const AllBook = () => {
  useEffect(axios.get("http://localhost:5000/book").then((res)=>{
       console.log("all article");
  }));
  return( 
  
  <dev></dev>);
};
