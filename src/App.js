import React from "react";
import "./App.css";
import SignUp from "./components/SignUp/signup";
import SignIn from "./components/SignIn/signin";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
