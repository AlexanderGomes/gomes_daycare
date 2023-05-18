import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const Credencials = () => {
  const { isAdmin } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAdmin) {
      navigate("/profile", { state: { from: location }, replace: true });
    }
  }, [isAdmin]);


  return isAdmin && <Outlet />;
};

export default Credencials;
