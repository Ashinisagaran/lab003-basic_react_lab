import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
    <div>
      <h2>BSc Computer Forensic and Security - Modules table </h2>
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
           <td>WAD 2</td>
           <td>2</td>
           <td>2</td>
          </tr>
          <tr>
           <td>LPoCFS</td>
           <td>4</td>
           <td>0</td>
          </tr>
          <tr>
           <td>NF</td>
           <td>2</td>
           <td>2</td>
          </tr>
          <tr>
           <td>DO</td>
           <td>1</td>
           <td>3</td>
          </tr>
          <tr>
           <td>PP</td>
           <td>3</td>
           <td>0</td>
          </tr>
          <tr>
           <td>NoSQL D</td>
           <td>2</td>
           <td>2</td>
          </tr>
        </tbody>  
      </table>
    </div>
  );
};

export default Demo;
