import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import "./Appointment.css";

export default function AppointmentForm(props){
    const [enterTitle,SetenterTitle]=useState("");
    const [enterDate,SetenterDate]=useState("");
    
    const titleChangehandler=(event)=>{
        SetenterTitle(event.target.value)
    }
    
    const dateChangeHandler=(event)=>{
        SetenterDate(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const appointData={
            Name:enterTitle,
            date:new Date(enterDate)
        }
        props.addData(appointData);
        SetenterTitle('');
        SetenterDate('');
    }

    return <div className="Appointment">
    
    <Box component={"form"} onSubmit={submitHandler} className="box">
    <h1>Add Appointment</h1>

    <TextField
          required
          id="outlined--required"
          className="text-required"
          label="Issue"
          defaultValue="Tell your issue"
          value={enterTitle}
          onChange={titleChangehandler}
        />
    <br/>
    <br/>
    <TextField
          required
          id="outlined-required"
          className="text-required"
        //   label="date"
          type="date"
          value={enterDate}
          onChange={dateChangeHandler}
        />
    <button type="submit" className="button" >Add</button>
    <div className="bar"></div>
    </Box>
    </div>
}