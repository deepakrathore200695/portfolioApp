import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from "./Layout/index";
import About from "./Pages/About/index";
import Contact from "./Pages/contact/index";
import Login from "./Pages/Login/index";
import Dashboard from "./Pages/Dashbaord/index";
import SIgnup from "./Pages/SIgnup/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SIgnup />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
