import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from "../../config"
import { Button } from "reactstrap"
import { useNavigate } from "react-router-dom"
function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            updateProfile(auth.currentUser, { displayName: name })
            setErrorMessage("")
            navigate('/')
        } catch (err) {
            setErrorMessage(err.message)

            console.err()
        }

    }
    return (
        <div className='row m-5'>
            <div className="col-sm-6 offset-3">


                <div className='border p-3 bg-light'>
                    <h4>Register</h4>
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                    <div className='form-group'>
                        <label >Name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" className='form-control' />

                    </div>
                    <div className='form-group'>
                        <label >Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className='form-control' />

                    </div>
                    <div className='form-group'>
                        <label >Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className='form-control' />

                    </div>
                    <Button onClick={handleRegister} className='mt-5' color="primary">Register</Button>

                </div>
            </div>
        </div>
    )
}

export default Register