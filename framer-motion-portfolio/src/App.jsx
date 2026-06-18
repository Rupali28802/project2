import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import Service from "./components/Service";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          {/* <Route path="/all-projects" element={<AllPRojects/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
