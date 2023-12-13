import logo from "./logo.svg";
import "./App.css";
import Jobs from "./Components/Jobs";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Courses from "./Components/Courses";

function App() {
  return (
    <div>
      <Header />
      <Jobs />
      {/* <Courses /> */}

      <Footer />
    </div>
  );
}

export default App;
