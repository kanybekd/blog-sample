import { useState, useEffect } from 'react'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { Link } from "react-router-dom"
import { db } from "../config"
import Spinner from "../assets/spinner"
import { Button } from "reactstrap"
import { nameCapitalize } from "../nameSplitter"
function Home({ fetchDataFromHome, updateDataFromAddBlog }) {
    console.log("after deletion")
    const [files, setFiles] = useState([])
    useEffect(() => {
        const files = collection(db, "myfire")
        const q = query(files, orderBy("createdAt", "desc"))
        onSnapshot(q, (snapshot) => {
            const files = snapshot.docs.map(i => ({
                id: i.id,
                ...i.data(),
            }))
            setFiles(files)
            fetchDataFromHome(files)
            updateDataFromAddBlog("")
        })

    }, [])
    function toDateTime(secs) {
        let t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return new Date(t).toLocaleDateString();
    }

    return (
        <div className='row mt-5'>
            {
                !files.length ? <Spinner /> : files.map(item => {
                    return (
                        <div key={item.id} className="col-12 col-sm-3  mb-3 pointer" style={{ cursor: "pointer" }}>
                            <Link to={`/blog/${item.id}`} className='card'>
                                <div>
                                    Title: {item.title}
                                </div>
                                <div>
                                    <img src={item.imageUrl} alt="" />
                                </div>
                                <div>
                                    <p>{toDateTime(item.createdAt.seconds)}</p>
                                </div>
                                {
                                    item.createdBy &&
                                    <div>
                                        <p>createdBy: {nameCapitalize(item.createdBy)}</p>
                                    </div>
                                }

                            </Link>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Home;