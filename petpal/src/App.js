import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";
import SitterSearch from './pages/SitterSearch';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Signin" element={<SigninPage />} />
        <Route path="/sitterSearch" element={<SitterSearch/>}/>
      </Routes>
    </>
  );
}

export default App;
