
import React, { useState } from "react";
const Filtre =({filtertext})=>{
    const[ filtering,setFiltering]=useState("all");
    filtertext(filtering)
    return(
        <div style={{paddingTop: "20px"}}>
            <button style={{backgroundColor:"#f44336"}} onClick={() => setFiltering("all")} >All Tasks</button>
            <button style={{ backgroundColor: "#f44336" }} onClick={() => setFiltering('done')} >Done</button>
    <button style={{ backgroundColor: "#f44336" }} onClick={() => setFiltering("not done")} >Not Done</button>

        </div>
    );
};






export default Filtre;
