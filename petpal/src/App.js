import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";
import SitterSearch from "./pages/SitterSearch";
import CommunityPage from "./pages/CommunityPage";
import HelpPage from "./pages/HelpPage";
import AdminPage from "./pages/AdminPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/sitterSearch" element={<SitterSearch />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
