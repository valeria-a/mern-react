import React from 'react';
import './App.css';
import Signup from "./components/signup/Signup";
import {Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";

function App() {
  return (
    <>
        <nav>
            <button>MOCK</button>
        </nav>
      <h1>
        Tasks App
      </h1>
        <Routes>
            <Route path={'/login'} element={<Login />}/>
            <Route path={'/signup'} element={<Signup />}/>
        </Routes>
    </>
  );
}

export default App;
