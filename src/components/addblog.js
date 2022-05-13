import React, { useState } from 'react'
import { Timestamp,collection,addDoc } from "firebase/firestore"
import {getDownloadURL,ref,uploadBytesResumable} from "firebase/storage"
import {storage,db} from "../config"
import { useNavigate } from 'react-router-dom'
function AddBlog() {
    const navigate=useNavigate()
    const [data, setData] = useState({
        title: "",
        description: "",
        imageUrl: "",
        createdAt: Timestamp.now().toDate()
    })
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleImageSubmit = (e) => {
        // console.log(Timestamp.now().toDate(), "<<<<<")
        // console.log(new Date, "<<< js")
        setData({ ...data, imageUrl: e.target.files[0] }) //{0:"my file",1:"another file"}
    }
    const handlePublish = () => {
        
        if(!data.title || !data.description || !data.imageUrl){
            alert("required fields are still empty")
            return 
        }

        const storageRef=ref(storage,`/images/${Date.now()}${data.imageUrl.name}`)
        const uploadImage=uploadBytesResumable(storageRef,data.imageUrl)
        uploadImage.on("image and data upload",
        ()=>{
            getDownloadURL(uploadImage.snapshot.ref).then((url)=>{
                    const file = collection(db,"myfire");
                    addDoc(file,{
                        title: data.title,
                        description: data.description,
                        imageUrl: url,
                        createdAt: Timestamp.now().toDate()
                    })
                })
            }
        )
        navigate("/")

}

    return (
        <div className='publish'>
            <input placeholder='enter title' type="text" name="title" onChange={handleChange} value={data.title} />
            <textarea placeholder='describe your blog' name="description" id="" cols="30" rows="10" onChange={handleChange} value={data.description} ></textarea>
            <input type="file" name="image" accept="image/*" onChange={handleImageSubmit} />
            <button onClick={handlePublish}>Publish</button>
        </div>
    )
}

export default AddBlog;
// linked premimum "32$" "16$" 

// html, css, react, js 

// dice com 
// indeed com 
// monster com 
// jp morgan chase : var, let, const, 



