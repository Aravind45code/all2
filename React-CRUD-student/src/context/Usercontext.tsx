import {FormEvent,ChangeEvent,createContext,useState,useContext,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { updateStudentToStorage,getStudentFromStorage,student } from "../service/localstorage";
//import {useNavigate} from "react-router-dom"
// type contextType={
//     name: string;
//   email: string;
//   gender: string;
//   phno:string;
//   address:string;
//   dob :string;
//   password:string;
//   confirmpassword:string;
//   inputOnChange?(event:ChangeEvent<HTMLInputElement>):void;
//   userFormSubmit?(event:FormEvent):void;
// }
// type contextType2={
//     name: string;
//   email: string;
//   gender: string;
//   phno:string;
//   address:string;
//   dob :string;
//   password:string;
//   confirmpassword:string;
//   inputOnChange?(event:ChangeEvent<HTMLInputElement>):void;
//   userFormSubmit?(event:FormEvent):void;
//   userarray:contextType [];

// }
//let navigate=useNavigate();
type Props={
    children:JSX.Element;
}
let initStudent:student={
    id:0,
         name: "",
        email: "",
        gender: "",
        phno:"",
        address:"",
        dob: "",
        password:"",
        confirmpassword:"",

}
type sContext={
    studentList:student[],
    newStudent:student,
    inputOnChange?(event:ChangeEvent<HTMLInputElement>):void,
    saveStudent?(event: FormEvent): void;
  updateStudent?(event: FormEvent,id:number): void;
  removeStudent(index: number): void;
  setEditData?(id: number): void;

}
const StudentContext=createContext<sContext>({
    studentList:[],
    newStudent:{...initStudent},
    removeStudent:() =>{},
       

})
export const StudentContextProvider=(props:Props)=>{
    let {children}=props;
    let navigate = useNavigate();
  let [newStudent, saveNewStudent] = useState<student>({ ...initStudent });
  let [studentList, setStudentList] = useState<student[]>(
    getStudentFromStorage()
  );
  useEffect(() => {
    updateStudentToStorage(studentList);
  }, [studentList]);

    let inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        let { name, value } = event.currentTarget;
        saveNewStudent({ ...newStudent, [name]: value });
        //console.log(value)
      };
    //   let userFormSubmit = (event: FormEvent) => {
    //     event.preventDefault();
    //     userarray.push(user);
    //     setUser({
    //         ...user,
    //         name: "",
    //         email: "",
    //         gender: "",
    //         phno:"",
    //         address:"",
    //         dob: "",
    //         password:"",
    //         confirmpassword:"",
    //     });
    //     setUserarray(userarray);
    //     console.log(userarray);
        
    
    //   };
      //console.log(userarray);
      let saveStudent = (event: FormEvent) => {
        event.preventDefault();
        newStudent.id = Date.now();
        setStudentList([...studentList, { ...newStudent }]);
        saveNewStudent({ ...initStudent });
        alert("Student Added Successfully");
      };
      let updateStudent = (event: FormEvent,id:number) => {
        event.preventDefault();
        // let result=studentList.find((student)=>id===student.id);
        // const newstudentList=[...studentList];
        // const updatingStudent={...result};
        // setStudentList([...studentList, { ...newStudent }]);
        // window.location.replace("/student");

        





      };
   
      let removeStudent = (index: number) => {
        let wantToDel = window.confirm("Are your sure to remove ?");
        if (wantToDel) {
          let _studentList = [...studentList];
          _studentList.splice(index, 1);
          setStudentList([..._studentList]);
        }
      };
      let setEditData = (id: number): void => {
        let result = studentList.find((student) => id === student.id);
        if (result === undefined) {
          //   navigate("/");
          window.location.replace("/");
        } else {
          saveNewStudent({ ...result });
        }
    };

      let value:sContext={
        studentList,
        inputOnChange,
        removeStudent,
        setEditData,
        saveStudent,
        newStudent
        

    };
    return (
        <StudentContext.Provider value={value}>{children}</StudentContext.Provider>

    );
};
export const StudentUserContext=()=>{
    return useContext(StudentContext);
}