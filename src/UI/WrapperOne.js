
function WrapperOne(props){
    return (
        <div id="Child">
            {props.children}
        </div>
    )
} 
export default WrapperOne