import { useSelector } from "react-redux";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const Auth = () => {
  const { token } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const location = useLocation();

  if (!token) {
    navigate("/", { state: { from: location }, replace: true });
  }

  return token && <Outlet />;
};

export default Auth;
