import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Blog from "./Blog";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/contact" element={<Contact />} />

        <Route exact path="/Blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};
export default App;
