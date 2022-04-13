import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import Edit from "./components/Edit";
import { Routes, Route , BrowserRouter} from "react-router-dom";
export default () => (
  <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/edit/:_id" element={<Edit />} />
    </Routes>
  </BrowserRouter>
);
