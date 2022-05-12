
import React from "react";
import "./Card.css";

const NewCard=(props)=>{
    console.log("props" , props);
   return(

   <>

   <div className="Card">
       <div>{props.items.Name}</div>
       <div>{String(props.items.date)}</div>
   </div>
   </>
   );
}
export default NewCard;