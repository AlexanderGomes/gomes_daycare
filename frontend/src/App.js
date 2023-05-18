import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Register, Login, Profile, Checkout } from "./pages";
import { Layout } from "./components";
import Auth from "./hooks/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route element={<Auth />}>
        <Route element={<Layout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
