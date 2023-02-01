import './Buttons.css'
function Buttons(props:any){
    return(
        <input type='button' value={props.label} onClick={props.fun}></input>
    )

}
export default Buttons;