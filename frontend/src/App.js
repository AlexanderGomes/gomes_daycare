import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Register,
  Login,
  Profile,
  Checkout,
  Management,
  Dashboard,
} from "./pages";
import { Layout } from "./components";
import Auth from "./hooks/Auth";
import Credentials from "./hooks/Credencials";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route element={<Auth />}>
        <Route element={<Layout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route element={<Credentials />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/management" element={<Management />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
