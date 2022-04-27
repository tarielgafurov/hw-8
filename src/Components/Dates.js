
function formatDate(date){
return date.toLocaleDateString()
}


function Dates(props){
    return(
        <div >
       {formatDate(props.date)}
        </div>
    )
}
export default Dates