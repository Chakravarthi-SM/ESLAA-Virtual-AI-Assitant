import React from "react";
import VirtualAssitant from "./components/VirtualAssistant";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/virtualassitant" element={<VirtualAssitant />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
