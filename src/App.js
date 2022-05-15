import { useState } from "react";
import "./App.css";
import NewCard from "./Components/NewCard";
import AppointmentForm from "./Components/AppointmentForm";

// const AppointData=[]

function App() {
  const[olddata,SetnewData]=useState([]);
  const addData=(AppointData)=>{
    // console.log('data' , AppointData);
    // const newArray = olddata;
    // newArray.push(AppointData);
    // console.log(newArray);
    SetnewData([...olddata,AppointData]);
    // console.log(olddata)
    // SetnewData((prevData)=>{
    //   return([AppointData,...prevData]);
    // })
  }


  return <>
      <div className="App">
        <div className="card">
          <div className="appointment">
            <AppointmentForm addData={addData} />
           { olddata.map((data)  => {return (<NewCard items={data}/>) })}
          </div>
          <div className="appointimg">
          <div className="imgholder"></div>
          </div>
        </div>
      </div>
    </>
}


export default App;
