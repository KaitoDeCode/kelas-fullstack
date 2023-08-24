/* eslint-disable react/prop-types */
const Total = ({exercises}) =>{
   const {exercises1,exercises2,exercises3} = exercises
    return(
        <p>Number of Exercises {exercises1+exercises2+exercises3}</p>
    )
}
export default Total