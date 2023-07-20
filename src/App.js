import logo from "./logo.svg";
import "./App.css";
import Dasboard from "./Components/Dasboard";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
// import Logout from "./Components/Logout";
// import Nopage from "./Components/Logout";
import Privateroute from "./Components/Privateroute";
import Publicroute from "./Components/Publicroute";
import Allproduct from "./Api/Allproduct";
import Singleproduct from "./Api/Singleproduct";
import Nopage from "./Components/Nopage";
import Home from "./Components/Home";
import Contect from "./Components/Contect";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Privateroute />}>
          <Route path="/dasboard" element={<Dasboard />} />
          <Route path="/allproduct" element={<Allproduct />} />
          <Route path="/singleproduct/:id" element={<Singleproduct />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/footer" element={<Footer />} />
        </Route>
        <Route element={<Publicroute />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<Nopage />} />
      </Routes>
    </div>
  );
}

export default App;
