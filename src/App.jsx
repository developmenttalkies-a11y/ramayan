import Navbar from "./components/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import KandPage from "./pages/KandPage";
import DohaDetails from "./pages/DohaDetails";
export default function App() {
  return(
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kand/:name" element={<KandPage />} />
        <Route path="/kand/:name/:id" element={<DohaDetails />} />
      </Routes>
    </BrowserRouter>
  );
}