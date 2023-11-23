import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./nav";
import CandidateRegistration from "./candreg";
import CandidateList from "./candlist";
import Home from "./home";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/candidate/registration"} element={<CandidateRegistration/>}/>
        <Route path={"/candidate/list"} element={<CandidateList/>}/>
      </Routes>
    </div>
  );
}

export default App;
