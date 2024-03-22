import React, { useState, useEffect } from 'react';

const EmployeeAndStudentList = () => {
  const [employees, setEmployees] = useState([]);85
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Simulated array of employee details
    const employeeData = [
      {  name: 'Dr.Meeravali shaik ',Employeeid :' MRUE2111T020', Designation: 'HOD' },
      { name: 'Dr. Harikrishna Kamatham', Employeeid :' MRUE2111T060', Designation: ' Assistant Professor' },
      {  name: 'Mr. M.Gouthamm', Employeeid :' MRUE2111T010',Designation: ' Assistant Professor' },
      {  name: 'Dr.Arun Singh Chouhan', Employeeid :' MRUE2111T460',Designation: ' Assistant Professor'},
      { name: 'Dr. K. Asish Vardhan', Employeeid :' MRUE2111T033',Designation: ' Assistant Professor' }
    ];

    setEmployees(employeeData);

    fetch('https://sindhuravuri666.github.io/StudentList/StudentList.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch student data');
        }
        return response.json();
      })
      .then(data => setStudents(data.slice(0, 5))) // Limit to 5 students
      .catch(error => console.error('Error fetching student data:', error));
  }, []);
  return (
    <div className="container">
      
      <center>
      <u><h1>Displaying Employee Details using bootstrap card</h1></u>
      </center>
      <div className="row">
        {employees.map((employee, index) => (
          <div key={employee.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card" >
              <div className="card-body">
                <center>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" height="180px" width="180px"/>
                <h5 className="card-title">{employee.name}</h5>
                
                <p className="card-text">EmployeeId: {employee.Employeeid}</p>
                <p className="card-text">Designation: {employee.Designation}</p></center>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr></hr>
      <center>
        
      <u><h1>Displaying Student Details using bootstrap card</h1></u>
      </center>
      <div className="row">
        {students.map((student, index) => (
          <div key={student.id} className="col-lg-4 col-md-6 mb-4">
            <div className='card' >
              <div className="card-body">
                <center>
                <img src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"  height="180px" width="180px"/>
                <h5 className="card-title">{student.Name}</h5>
                <p className="text-dark">RollNumber: {student.RollNo}</p>
                <p className="card-text">EmailId: {student.EmailID}</p></center>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeAndStudentList;