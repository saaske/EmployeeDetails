import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import logo from "./logo.JPG";

function App() {
  const [employees, setEmployees] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    let config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
      },
    };
    Axios.get(`/v1/account/employees?size=${count}`, config).then((resp) => {
      console.log(resp);
      if (resp.statusText === "OK") {
        let data = [...employees, ...resp.data];
        setEmployees(data);
      }
    });
  }, [count]);
  return (
    <div className="App">
      <div className="App-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="App-header">
        <div style={{ width: "100%", marginLeft: "10px", marginRight: "10px" }}>
          <div
            className="align-left bold"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            Employee Details
          </div>
          {employees.map((employee, i) => (
            <div className="container" key={i}>
              <div className="flex-item">
                <div>
                  <span className="bold">Id:</span> <span>{employee.id}</span>
                </div>
                <div>
                  <span className="bold">First Name:</span>{" "}
                  <span>{employee.employee.firstName}</span>
                </div>
                <div>
                  <span className="bold">Last Name:</span>{" "}
                  <span>{employee.employee.lastName}</span>
                </div>
              </div>
              <div className="flex-item">
                <div>
                  <span className="bold">Age:</span> <span>{employee.age}</span>
                </div>
                <div>
                  <span className="bold">Joining Date:</span>{" "}
                  <span>{employee.dateOfJoining}</span>
                </div>
                <div>
                  <span className="bold">Dept:</span>{" "}
                  <span>{employee.department}</span>
                </div>
                <div>
                  <span className="bold">Salary:</span>{" "}
                  <span>{employee.salary}</span>
                </div>
              </div>
              <div className="flex-item">
                <div>
                  <span className="bold">Projects:</span>{" "}
                  <span>
                    {employee.employee.projects.map((p) => p.name).join(", ")}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div
            className="align-right"
            style={{
              fontSize: "14px",
              textDecoration: "underline",
              textDecorationColor: "blue",
              color: "red",
              marginRight: "10px",
            }}
          >
            <span onClick={(e) => setCount(count + 1)}>More</span>
          </div>
          <div
            className="align-left"
            style={{
              fontSize: "12px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <span>Copyright &copy; 2020 www.xyz.com All rights reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
