import React from 'react'
import { useParams } from "react-router-dom"
function DetailedBlog({ data }) {
    const { id } = useParams()
    console.log(typeof id)

    return (
        <div>
            {data.map(i => <p>{i.title}</p>)}
        </div>
    )
}

export default DetailedBlog;