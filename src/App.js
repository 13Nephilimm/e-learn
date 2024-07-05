import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Courses from "./pages/Courses/Courses";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import SignUp from "./pages/SignUp/SignUp";
import SingleCourse from "./pages/SingleCourse/SingleCourse";
import Leaderboard from "./pages/Leaderboard/Leaderboard";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
