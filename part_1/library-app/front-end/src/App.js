import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import {CreateBook} from "CreateBook.js"
import { AllBook } from "AllBook.js";
import { GitById } from "BookById.js";
const App = () => {
  return (
    <>
    <Link to = "/library/create_book">create book</Link>
      <h1>App Component</h1>
     <Route exact path= "/library/create_book" Component = {CreateBook}></Route>
     <Route exact path= "/library" Component = {AllBook}></Route>
     <Route exact path= "/library/:book_id" rander= {()=>{
      <GitById value = {book_id}>}}
     ></Route>
    </>
  );
};

export default App;
