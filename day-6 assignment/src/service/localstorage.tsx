export type student={
    id:number,
    name: string;
  email: string;
  gender: string;
  phno:string;
  address:string;
  dob :string;
  password:string;
  confirmpassword:string;
}
export const updateStudentToStorage = (s: student[]) => {
    localStorage.setItem("productList", JSON.stringify(s));
  };
  
  export const getStudentFromStorage = (): student[] => {
    let product = localStorage.getItem("productList");
    return product ? JSON.parse(product) : [];
  };