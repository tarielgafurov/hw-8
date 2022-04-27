import Avatars from "../Components/Avatars"
import Names from "../Components/Names"
import Text from "../Components/Text"
import Dates from "../Components/Dates"
import Wrapper from "../UI/Wrapper"
import WrapperOne from "../UI/WrapperOne"
import '../UI/Wrapper.css'

function Comments(props){
    return(
        <div>
        <WrapperOne>
        <Avatars author={props.author}/>
        <Names author={props.author} />
        </WrapperOne>

        <Wrapper>
        <Text text={props.text}/>
        <Dates date={props.date}/>
        </Wrapper>
        </div>
    )
}
export default Comments