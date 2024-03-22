import React from "react";

class MyClassComponent extends React.Component {
    render() {
        return (
            <div style={{width:'fit-content',margin:'auto'}}>
                <h1 style={{fontFamily:  'Papyrus, Fantasy'}}>Employees Details using Class Component</h1>
                <p>Example of Employee details of 3 persons using class</p>
            <table className="table-striped table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Qualification</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                <tr>  <td>Dr. Meeravali Shaikh</td> <td>HOD</td> <td>B. Tech (CSE), M. Tech (CSE), Ph. D (CSE)</td> </tr>
                <tr>  <td>Dr.B.Jogeswara Rao</td> <td>Associate Professor</td> <td>MSc (Comp), M. Tech (CSE), Ph. D (CSE)</td> </tr>
                <tr>  <td>Mr. M.Gouthamm</td> <td>Assistant Professor</td> <td>B. Tech (CSE), M. Tech (CSE)</td> </tr>
                </tbody>
            </table>
        </div>
        );
    }
}

export default MyClassComponent;
