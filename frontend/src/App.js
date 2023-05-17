import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Register, Login, Profile } from "./pages";
import { Layout } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route element={<Layout />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
