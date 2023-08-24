/* eslint-disable react/prop-types */
const Total = ({parts}) =>{
   
    return(
        <p>Number of Exercises {parts[0].exercises+parts[1].exercises+parts[2].exercises}</p>
    )
}
export default Total