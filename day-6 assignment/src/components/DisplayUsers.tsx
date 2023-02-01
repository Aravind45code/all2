import React from 'react'
import { StudentUserContext } from '../context/Usercontext'
import {useNavigate} from "react-router-dom"

type Props = {}

const DisplayUsers = (props: Props) => {
  let navigate=useNavigate();
    let {studentList,removeStudent}=StudentUserContext();
  return (
    <div>
        <table className="table table-dark mt-5">
<thead>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">Gender</th>
    <th scope="col">email</th>
    <th scope="col">address</th>
    <th scope="col">Action</th>
  </tr>
  </thead>
  <tbody>
  {studentList.length !== 0 ? null : (
              <tr>
                <td colSpan={5} className="text-danger fw-bold text-center">
                  No Student Found
                </td>
              </tr>
            )}
  {studentList.map((student,index)=>{
    return (

  <tr key={index}>
    <td>{student.name}</td>
    <td>{student.gender}</td>
    <td>{student.email}</td>
    <td>{student.address}</td>
    <td>
                    <button
                      className="btn btn-sm btn-danger mx-1"
                      title="delete" onClick={() => removeStudent(index)}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-primary mx-1"
                      title="edit" onClick={()=> navigate("/student/edit/"+student.id)}
                    >
                      <i className="fa fa-edit" aria-hidden="true"></i>
                      </button>
                  </td>
  </tr>
  );
    })}
  </tbody>
</table>

</div>
  )
}

export default DisplayUsers