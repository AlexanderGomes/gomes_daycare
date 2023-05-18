import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { setIsAdmin } from "../features/auth/AuthSlice";
import jwt_decode from "jwt-decode";

const Auth = () => {
  const { token, isAdmin } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const decodeToken = () => {
    const decodedToken = jwt_decode(token);
    const admin = decodedToken.isAdmin;
    return admin;
  };

  useEffect(() => {
    if (!token) {
      navigate("/", { state: { from: location }, replace: true });
    } 

    if (isAdmin && token) {
      navigate("/dashboard", { state: { from: location }, replace: true });
    }

    if (token) {
      const admin = decodeToken();
      dispatch(setIsAdmin(admin));
    }

    setIsLoading(false);
  }, [token, isAdmin]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return token && <Outlet />;
};

export default Auth;
