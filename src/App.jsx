import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <p className="text-xs bg-purple-800 text-white px-4 py-1">
        Developed by TDA Studio.
      </p>
      <Outlet />
    </>
  );
}

export default App;
