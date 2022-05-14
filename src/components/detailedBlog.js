import React from 'react'
import { useParams } from "react-router-dom"
import { deleteDoc, doc } from "firebase/firestore"
import { storage, db, auth } from "../config"
import { deleteObject, ref } from "firebase/storage"
import { Card, CardText, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
function DetailedBlog({ data, updateDataFromAddBlog }) {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const { id } = useParams()
    const filtered = data.filter(i => i.id === id)[0]
    const handleDelete = async (id, imageUrl) => {
        if (window.confirm("are you sure removing this item")) {

            try {
                navigate('/')
                await deleteDoc(doc(db, "myfire", id))
                const storageRef = ref(storage, imageUrl)
                await deleteObject(storageRef)
            } catch (error) {
                console.log(error)
            }
        }
    }
    const handleUpdate = () => {
        updateDataFromAddBlog(filtered)
        navigate('/addBlog')
    }
    return (
        <div className='row'>
            <div className="col-sm-4 m-5">

                <Card>
                    <CardImg
                        alt="Card image cap"
                        src={filtered.imageUrl}
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {filtered.title}
                        </CardTitle>
                        <CardText>
                            {filtered.description}
                        </CardText>

                        {user &&
                            <div >

                                <Button className='me-5' color="danger" onClick={() => handleDelete(filtered.id, filtered.imageUrl)}>
                                    Delete
                                </Button>
                                <Button color="primary" onClick={handleUpdate}>
                                    Update
                                </Button>
                            </div>
                        }
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default DetailedBlog;