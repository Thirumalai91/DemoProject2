import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import Users from "./Pages/Users.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
