import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './styles/main.css'
import Navbar from "./components/navbar/Navbar.jsx";
import {Header} from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import {Project} from "./pages/Project.jsx";
import {Contacts} from "./pages/Contacts.jsx";
import {ProjectThis} from "./pages/ProjectThis.jsx";
import {ScrollToTop} from "./utils/ScrollToTop.js";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projects' element={<Project/>}></Route>
          <Route path='/project/:id' element={<ProjectThis/>}></Route>
          <Route path='/contacts' element={<Contacts/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
