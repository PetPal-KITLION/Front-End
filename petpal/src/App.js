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
import Layout from "./components/Layout";
import SitterApplyPage from "./pages/SitterApplyPage";
import ResumePage from "./pages/ResumePage";
import CustomerInquiry from "./pages/CustomerInquiry";
import CommunityWritePage from "./pages/CommunityWritePage";
import CommunityDetailPage from "./pages/CommunityDetailPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/sitterSearch" element={<SitterSearch />} />
        <Route path="/sitterApply" element={<SitterApplyPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/write" element={<CommunityWritePage />} />
        <Route path="/detail" element={<CommunityDetailPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/customerInquiry" element={<CustomerInquiry />} />
      </Routes>
    </Layout>
  );
}

export default App;
