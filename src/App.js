import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Login from "./components/authentication/Login";
import SignUp from "./components/authentication/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
