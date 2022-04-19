import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  const course = "BSc Computer Forensic and Security - Modules table"
  const modules = [
    {
      name: "WAD 2",
      noLectures: 2,
      noPracticals: 2
    },
    {
      name: "LPoCFS",
      noLectures: 4,
      noPracticals: 0
    },
    {
      name: "NF",
      noLectures: 2,
      noPracticals: 2
    },
    {
      name: "DO",
      noLectures: 1,
      noPracticals: 3
    },
    {
      name: "PP",
      noLectures: 3,
      noPracticals: 0
    },
    {
      name: "NoSQL D",
      noLectures: 2,
      noPracticals: 2
    }
  ];
  return (
    <div>
      <h2>{course}</h2>
      <table className="table table-bordered">
        <thead> 
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
           <td>{modules[0].name}</td>
           <td>{modules[0].noLectures}</td>
           <td>{modules[0].noPracticals}</td>
          </tr>
          <tr>
           <td>{modules[1].name}</td>
           <td>{modules[1].noLectures}</td>
           <td>{modules[1].noPracticals}</td>
          </tr>
          <tr>
           <td>{modules[2].name}</td>
           <td>{modules[2].noLectures}</td>
           <td>{modules[2].noPracticals}</td>
          </tr>
          <tr>
           <td>{modules[3].name}</td>
           <td>{modules[3].noLectures}</td>
           <td>{modules[3].noPracticals}</td>
          </tr>
          <tr>
           <td>{modules[4].name}</td>
           <td>{modules[4].noLectures}</td>
           <td>{modules[4].noPracticals}</td>
          </tr>
          <tr>
           <td>{modules[5].name}</td>
           <td>{modules[5].noLectures}</td>
           <td>{modules[5].noPracticals}</td>
          </tr>
        </tbody>  
      </table>
    </div>
  );
};

export default Demo;
