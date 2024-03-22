import React from "react";

const MyComponentWithoutJSX=()=>{
    return(
        React.createElement('p',{},[
            React.createElement('h1',{},'This is MyComponentWithoutJSX'),
            React.createElement('h5',{},'Here it is created without jsx')
        ])
    );
}
export default MyComponentWithoutJSX;
