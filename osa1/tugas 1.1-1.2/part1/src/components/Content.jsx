import Materi from "./Materi"

/* eslint-disable react/prop-types */
const Content = ({exercises}) =>{
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const {exercises1,exercises2,exercises3} = exercises

    return(
        <>
            <Materi judul={part1} jumlah={exercises1}/>
            <Materi judul={part2} jumlah={exercises2}/>
            <Materi judul={part3} jumlah={exercises3}/>
        </>
    )
}


export default Content