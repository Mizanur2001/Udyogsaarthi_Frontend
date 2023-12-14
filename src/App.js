import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Jobs from "./Components/Jobs";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Courses from "./Components/Courses";
import JobDescription from "./Components/JobDescription";
import Support from "./Components/Support";
import Register from "./Components/Register";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/jobs/:id" element={<JobDescription />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
