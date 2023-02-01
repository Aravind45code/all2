import Displayrow from "./Displayrowhelper";
function Displayscr(props:any){
    return(
        <div>
            <Displayrow values={props.value1}/>
            <Displayrow values={props.value2}/>
            
        </div>
    );

};
export default Displayscr;