import Register from "./components/Register";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/page" element={<Landing/>}/>
    </Routes>
  );
}

export default App;
