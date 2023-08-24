import Materi from "./Materi"

/* eslint-disable react/prop-types */
const Content = ({parts}) =>{

    return(
        <>
            <Materi judul={parts[0].name} jumlah={parts[0].exercises} />
            <Materi judul={parts[1].name} jumlah={parts[1].exercises} />
            <Materi judul={parts[2].name} jumlah={parts[2].exercises} />
        </>
    )
}


export default Content