import React, { useEffect, useState } from "react";

const DataFetchingComponent=()=>{

    let heading=["S.No","HTNo","Name", "EmailID"];
    const apiurl='https://sindhuravuri666.github.io/StudentList/StudentList.json';
    
    const[students, setstudents]= useState([]);

    const fetchstudents=async ()=>{
        const response= await fetch(apiurl);
        const students=await response.json();
        setstudents(students);
    }
    useEffect(()=>{
        fetchstudents();
    },[])
    return(
        <div style={{textAlign:"center"}}>
            <h4>Fetch Students Data using useEffect</h4>
            <table className="table table-stripped-columns table-hover" style={{width:'fit-content',margin:'auto'}}>
                <thead>
                    <tr>
                        {heading.map((head, headID)=>(
                            <th key={headID}>{head}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                      {students.slice(10,15).map((eachstudent, index)=> (
                        <tr key={index}>
                            <td>{index+1}</td>
							<td>{eachstudent.RollNo}</td>
                            <td>{eachstudent.Name}</td>
                            <td>{eachstudent.EmailID}</td>
                        </tr>
                        ))}                 
                </tbody>
            </table>
        </div>
    );
}
export default DataFetchingComponent;
