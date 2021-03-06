import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = (props) => {
  return (
    <div>
      <h2>{`${props.course}`}</h2>
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
           <td>{props.modules[0].name}</td>
           <td>{props.modules[0].noLectures}</td>
           <td>{props.modules[0].noPracticals}</td>
          </tr>
          <tr>
           <td>{props.modules[1].name}</td>
           <td>{props.modules[1].noLectures}</td>
           <td>{props.modules[1].noPracticals}</td>
          </tr>
          <tr>
           <td>{props.modules[2].name}</td>
           <td>{props.modules[2].noLectures}</td>
           <td>{props.modules[2].noPracticals}</td>
          </tr>
          <tr>
           <td>{props.modules[3].name}</td>
           <td>{props.modules[3].noLectures}</td>
           <td>{props.modules[3].noPracticals}</td>
          </tr>
          <tr>
           <td>{props.modules[4].name}</td>
           <td>{props.modules[4].noLectures}</td>
           <td>{props.modules[4].noPracticals}</td>
          </tr>
          <tr>
           <td>{props.modules[5].name}</td>
           <td>{props.modules[5].noLectures}</td>
           <td>{props.modules[5].noPracticals}</td>
          </tr>
        </tbody>  
      </table>
    </div>
  );
};

export default Demo;
