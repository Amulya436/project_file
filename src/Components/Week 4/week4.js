import React from "react";
import Studentcomponent from './useStateStudentComponent';
import DataFetchingComponent from "./DataFetchingComponents";
import './week4.css'


function week4(){
    return(
        <div className="week4">
            <h1>Week 4 - Create React App and Implement API Calls using React Hooks</h1>
            <div className="container1">
				<h3>UseState:</h3>
				<h3>Display student details using useState().</h3>
                <Studentcomponent/>
                <hr/>
                <h3>UseEffect:</h3>
                <h3>Display student info using useEffect()</h3>
                <DataFetchingComponent/>
                <br/>
            </div>
        </div>
    );
}
export default week4;