import { useEffect } from "react";
import { stringify } from "querystring";
import { MouseEventHandler,ChangeEvent, FormEvent, useState } from "react";
import { useUserContext } from "../context/Usercontext";
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
  let {userarray,userFormSubmit,inputOnChange,name,gender,dob,email,password,confirmpassword,phno,address}=useUserContext();
  const [gmail,setGmail]=useState<boolean>(false)
  const checkMail=(event: FormEvent)=>{
    console.log("In check mail")
    event.preventDefault();
    if(userarray.length===0) return true;
    for(let user of userarray){
      if(user.email===email){
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
          if(userFormSubmit){
            userFormSubmit(event)
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
              value={name}
              name="name"
              onChange={inputOnChange}
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
              value={email}
              name="email"
              onChange={inputOnChange}
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
              value={phno}
              name="phno"
              onChange={inputOnChange}
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
              value={address}
              name="address"
              onChange={inputOnChange}
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
              value={dob}
              name="dob"
              onChange={inputOnChange}
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
              value={password}
              name="password"
              onChange={inputOnChange}
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
              value={confirmpassword}
              name="confirmpassword"
              onChange={inputOnChange}
            />
            {confirmpassword!=="" && password!==confirmpassword && <p>passwords are not matching</p>}
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
                  onChange={inputOnChange}
                checked = {gender==="Male"}
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
                  onChange={inputOnChange}
                  checked = {gender==="Female"}
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
