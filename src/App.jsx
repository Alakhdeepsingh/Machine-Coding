import "./App.css";
import Assignment from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from "./Components/Content";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Assignment />} />
        <Route path="/content/:id" element={<Content />} />
      </Routes>
    </Router>
  );
}

export default App;
