import './App.scss';
// IMPORT COMPONENTS
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import About from "./pages/About";
import Projects from "./pages/Projects";
import Layout from './components/Layout';


function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Layout />} />
 
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
