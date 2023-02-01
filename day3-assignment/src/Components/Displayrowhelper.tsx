import './Displayrowhandler.css'
function Displayrow(props:any){
    return(
        <div>
            <input type="text" className="rowhelper" value={props.values}/>
        </div>
    )

}
export default Displayrow;