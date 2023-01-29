class user {
     name :string;
     id:number;
    phno:number;

    public constructor(name :string,id:number,phno:number){
        this.name=name;
        this.id=id;
        this.phno=phno;
    }
}
interface Details{
    designation :string;
    salary :Number;
    office_time:string;
    printEmployee:()=>void;
}
class person extends user implements Details{
    designation: string;
    salary:Number;
    office_time:string;

    public constructor(name:string,id:number,phno:number,designation:string,salary:Number,office_time:string){
        super(name,id,phno);
        this.designation=designation;
        this.salary=salary;
        this.office_time=office_time;
        
    }
    public printEmployee(): void{
        console.log("the employee details are");
        console.log(`the employee name is ${this.name},id is${this.id},phno is${this.phno},designation is${this.designation},salary is ${this.salary},office_time is ${this.office_time}`)

    }
}
const p=new person("aravind",101,9390246649,"sde",10000,"8am");
p.printEmployee();


