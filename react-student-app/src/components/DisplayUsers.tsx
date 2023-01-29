import React from 'react'
import { useUserContext } from '../context/Usercontext'

type Props = {}

const DisplayUsers = (props: Props) => {
    let {userarray}=useUserContext();
    console.log(userarray);
  return (
    <div>
        <table className="table table-dark mt-5">
<thead>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">Gender</th>
    <th scope="col">email</th>
    <th scope="col">address</th>
  </tr>
  </thead>
  <tbody>
  {userarray.map(({name,gender,email,address},index)=>(

  <tr key={index}>
    <td>{name}</td>
    <td>{gender}</td>
    <td>{email}</td>
    <th>{address}</th>
  </tr>
  ))}
  </tbody>
</table>

</div>
  )
}

export default DisplayUsers