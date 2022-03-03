import "./App.css";
import { Navbar } from "./components/Navbar";
<<<<<<< HEAD
import { HomePage } from "./components/HomePage";

=======
import { Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./components/Login";
>>>>>>> 6dc2a0490ee99de65917cd49eccb0037e89e8af5
function App() {
  return (
    <div className="App">
      <Navbar />
<<<<<<< HEAD
      <HomePage />
=======
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/"
          element={<PrivateRoute>{<h1>Homepage</h1>}</PrivateRoute>}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route></Route>
      </Routes>
>>>>>>> 6dc2a0490ee99de65917cd49eccb0037e89e8af5
    </div>
  );
}

export default App;
