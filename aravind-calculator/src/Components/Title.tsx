import './Title.css'
function Title(props:any){
    return(
        <div className="titleclass">
            {props.value}
        </div>
    )
}
export default Title;