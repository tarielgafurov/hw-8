import './Wrapper.css'

function Wrapper(props){
    return(
        <div className='wrappers-Child'>
      {props.children}
        </div>
    )
}
export default Wrapper