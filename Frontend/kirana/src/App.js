import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./components/Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/"
          element={<PrivateRoute>{<h1>Homepage</h1>}</PrivateRoute>}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
