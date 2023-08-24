/* eslint-disable react/prop-types */
const Header = (props) =>{
    console.log(props)
    return(
        <h1>{props.course.name}</h1>
    )
}
export default Header