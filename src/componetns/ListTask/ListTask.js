import { useSelector } from "react-redux"
import React, { useState } from "react";
import Filtre from "../Filtre";
import Task from "./Task";


const ListTask =()=>{
    const[text,setText]= useState("all")
    const filtertext =(text)=> {
        setText(text) 
    }
    const tasks = useSelector((state) => state.counterReducer.Lists);
    return(

        <div>  
        tasklist:
        <Filtre filtertext={filtertext}/>
        {text === 'all'
           ? tasks.map((el) => <Task el={el} />)
            : (text === 'done')
            ? tasks.filter((el) => el.check === true).map((el) => (
                <Task el={el} />
              )
              )
            : tasks.filter((el) => !el.check).map((el) => (
                <Task el={el}  />
              ))}
      </div>
    );
    
};
export default ListTask;