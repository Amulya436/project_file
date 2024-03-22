import React from "react";
import MyComponentWithoutJSX from "./MyComponentWithoutJSX/";
import MyComponentWithJSX from "./week2/MyComponentWithJSX";
import MyFunctionComponent from "./week2/MyFunctionComponent";
import MyClassComponent from "./week2/MyClassComponent";

function week2(){
    return(
        <div>
            <h1 style={{color:'#0534a1'}}>WEEK 2: Create React App with Components</h1>
            <h3>Q1:Create a React Component MyComponentWithoutJSX and display example of it on the webpage.</h3>
            <MyComponentWithoutJSX/><hr/>
            <h3>Q2:Create a React Component MyComponentWithJSX and display examples of it on the webpage.</h3>
            <MyComponentWithJSX/><hr/>
            <h3>Q3:Create a React Component MyFunctionComponent and display studentinfo on the webpage.</h3>
            <MyFunctionComponent/><hr/>
            <h3>Q4:Create a React Component MyClassComponent and display employeedetails on the webpage.</h3>
            <MyClassComponent/><hr/>
        </div>
        
    );
}
export default week2;