import {FormEvent,ChangeEvent,createContext,useState,useContext} from "react"
type contextType={
    name: string;
  email: string;
  gender: string;
  phno:string;
  address:string;
  dob :string;
  password:string;
  confirmpassword:string;
  inputOnChange?(event:ChangeEvent<HTMLInputElement>):void;
  userFormSubmit?(event:FormEvent):void;
}
type contextType2={
    name: string;
  email: string;
  gender: string;
  phno:string;
  address:string;
  dob :string;
  password:string;
  confirmpassword:string;
  inputOnChange?(event:ChangeEvent<HTMLInputElement>):void;
  userFormSubmit?(event:FormEvent):void;
  userarray:contextType [];

}
type Props={
    children:JSX.Element;
}
let UserContext=createContext<contextType2>({
    name: "",
        email: "",
        gender: "",
        phno:"",
        address:"",
        dob: "",
        password:"",
        confirmpassword:"",
        userarray: [] as contextType[],
       

})
export const UserContextProvider=(props:Props)=>{
    let {children}=props;
    let [user, setUser] = useState<contextType2>({
        name: "",
        email: "",
        gender: "",
        phno:"",
        address:"",
        dob: "",
        password:"",
        confirmpassword:"",
        userarray: [] as contextType[],
       
    });
    const [userarray,setUserarray]=useState<contextType[]>([])
    let inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        let { name, value } = event.currentTarget;
        setUser({ ...user, [name]: value });
        //console.log(value)
      };
      let userFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        userarray.push(user);
        setUser({
            ...user,
            name: "",
            email: "",
            gender: "",
            phno:"",
            address:"",
            dob: "",
            password:"",
            confirmpassword:"",
        });
        setUserarray(userarray);
        console.log(userarray);
        
    
      };
      //console.log(userarray);

      let value:contextType2={
        name: user.name,
        email: user.email,
        gender: user.gender,
        phno:user.phno,
        address:user.address,
        dob: user.dob,
        password:user.password,
        confirmpassword:user.confirmpassword,
        inputOnChange:inputOnChange,
        userFormSubmit:userFormSubmit,
        userarray:userarray,
        

    };
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>

    );
};
export const useUserContext=()=>{
    return useContext(UserContext);
}