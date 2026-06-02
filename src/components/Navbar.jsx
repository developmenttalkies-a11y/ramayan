import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-saffron text-white p-4 shadow-md flex flex-col items-center">
      
      <h1 className="text-2xl font-bold tracking-wide mb-2">
        📜 श्री रामचरितमानस
      </h1>

      <div className="font-bold flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </div>
  );
}
