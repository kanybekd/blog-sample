import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./components/home"
import AddBlog from "./components/addblog"
import Login from "./components/auth/login"
import Register from "./components/auth/register"
import Navbar from "./assets/navbar"
import DetailedBlog from "./components/detailedBlog"
import './App.css';

function App() {
  const [data, setDataFromHome] = useState([])
  const [updateData, setUpdate] = useState("")

  const fetchDataFromHome = (dataFromHome) => {
    setDataFromHome(dataFromHome)

  }
  const updateDataFromAddBlog = (dataForUpdate) => {
    setUpdate(dataForUpdate)

  }
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home fetchDataFromHome={fetchDataFromHome} updateDataFromAddBlog={updateDataFromAddBlog} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addBlog" element={<AddBlog updateData={updateData} />} />
          <Route path="/blog/:id" element={<DetailedBlog data={data} updateDataFromAddBlog={updateDataFromAddBlog} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
