import React from "react";
function MyComponentWithJSX(){
    const name = 'L.Guna Vardhan Reddy';
    const Age=18;
    var cTime = new Date().toTimeString();
    const didYouPass = false;
    return(
    <div className="ComponentWithJSX">
        
       <div>
        <h3>Examples of component with JSX</h3>
        <p><u><b>Ex1:Basic html tags</b></u></p>
        <p>Hello World!!!</p>
        <hr/>
       <p><u><b>Ex2:Basic Attribute Syntax</b></u></p>
        <h2 style={{color:'#0e0ec9'}}>Department of Computer Science and Engineering </h2>
        <hr/>
        <p><u><b>Ex3:Expressions</b></u></p>
        <h2 style={{fontWeight:'120px'}}>Hello,I'm {name}!</h2>
        <p className="p">My age is {Age}</p>
        <hr/>
        <div>
        <p><u><b>Ex4:Functions</b></u></p>
        <p>The current time is {cTime}</p></div>
        <hr/>
        <p><u><b>Ex5:Conditional Rendering</b></u></p>
        <p>{didYouPass ? 'You are eligible' : 'You are not eligible,try harder...'}</p>
        <hr/>
        <p><u><b>Ex6:Fragments</b></u></p>
        <>
        <p>Paragraph using fragments!!</p>
        </>
        <hr/>
        <p><u><b>Ex7:Nested Elements</b></u></p>
        <div>
        <h1>This is outer element</h1>
        <h3>This is inner element</h3>
        <h5>This is inner element</h5>
        </div>
        <hr/>
        </div>
        </div>
    );
}
export default MyComponentWithJSX;