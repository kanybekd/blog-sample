import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./components/home"
import AddBlog from "./components/addblog"
import Navbar from "./assets/navbar"
import DetailedBlog from "./components/detailedBlog"
import './App.css';

function App() {
  const [data, setDataFromHome] = useState([])

  const fetchDataFromHome = (dataFromHome) => {
    setDataFromHome(dataFromHome)

  }
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home fetchDataFromHome={fetchDataFromHome} />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/blog/:id" element={<DetailedBlog data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
