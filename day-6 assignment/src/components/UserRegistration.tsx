import { useEffect } from "react";
import { stringify } from "querystring";
import { MouseEventHandler,ChangeEvent, FormEvent, useState } from "react";
import {StudentUserContext} from "../context/Usercontext"
type User = {
  name: string;
  email: string;
  gender: string;
  phno:string;
  address:string;
  dob :string;
  password:string;
  confirmpassword:string;
};
const UserRegistration = () => {
  let {inputOnChange,saveStudent,newStudent,studentList}=StudentUserContext();
  const [gmail,setGmail]=useState<boolean>(false)
  const checkMail=(event: FormEvent)=>{
    console.log("In check mail")
    event.preventDefault();
    if(studentList.length===0) return true;
    for(let user of studentList){
      if(user.email===newStudent.email){
        setGmail(true);
        return false;
      }
    }
    setGmail(false);
    return true

  }
  return (
    <>
      <section className="card col-8 col-lg-4 p-4 mt-3">
        <h1>User Registration </h1>
        <form action="#" onSubmit={(event: FormEvent) => {

          if(!checkMail(event)){
            return;
          }
          if(saveStudent){
            saveStudent(event);
          }
        }}>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter User Name"
              value={newStudent.name}
              name="name"
              onChange={inputOnChange?inputOnChange:()=>{}}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Gmail
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter User Name"
              value={newStudent.email}
              name="email"
              onChange={inputOnChange?inputOnChange:()=>{}}
            />
            {gmail && <p>Email-id already exists</p>}
          </div>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Mobile no
            </label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter phone number"
              value={newStudent.phno}
              name="phno"
              onChange={inputOnChange?inputOnChange:()=>{}}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your address"
              value={newStudent.address}
              name="address"
              onChange={inputOnChange?inputOnChange:()=>{}}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Dob
            </label>
            <input
              type="string"
              className="form-control"
              placeholder="dd-mm-yyyy"
              value={newStudent.dob}
              name="dob"
              onChange={inputOnChange?inputOnChange:()=>{}}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your password"
              value={newStudent.password}
              name="password"
              onChange={inputOnChange?inputOnChange:()=>{}}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Confirm password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Re-enter password"
              value={newStudent.confirmpassword}
              name="confirmpassword"
              onChange={inputOnChange?inputOnChange:()=>{}}
            />
            {newStudent.confirmpassword!=="" && newStudent.password!==newStudent.confirmpassword && <p>passwords are not matching</p>}
          </div>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Gender
            </label>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Male"
                  name="gender"
                  onChange={inputOnChange?inputOnChange:()=>{}}
                checked = {newStudent.gender==="Male"}
                />
                <label className="form-check-label" htmlFor="">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Female"
                  name="gender"
                  onChange={inputOnChange?inputOnChange:()=>{}}
                  checked = {newStudent.gender==="Female"}
                />
                <label className="form-check-label" htmlFor="">
                  Female
                </label>
              </div>
            </div>
          </div>
          <button className="mt-2 btn btn-outline-success">
            <span className="fa fa-floppy-o me-2 "></span>
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default UserRegistration;
