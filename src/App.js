import logo from './logo.svg';
import './App.css';
import Navbar from "./nav";
import CandidateRegistration from "./candreg";
import CandidateList from "./candlist";
import Home from "./home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/candidate/registration"} element={<CandidateRegistration/>}/>
            <Route path={"/candidate/list"} element={<CandidateList/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
