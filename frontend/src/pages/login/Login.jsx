import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Kids from "../../assets/books.gif";
import * as Yup from "yup";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("invalid email").required("Email Required"),
      password: Yup.string()
        .min(8, "password must be 8 characters or longer")
        .required("Password Required"),
    }),
    onSubmit: (values) => {
      const userData = {
        email: values.email,
        password: values.password,
      };
      dispatch(login(userData));
    },
  });

  useEffect(() => {
    if (isSuccess || token) {
      navigate("/profile");
      dispatch(reset());
    }
  }, [token, isSuccess]);

  const handleCleanUp = () => {
    if (message) {
      dispatch(reset());
    }
  };

  return (
    <div className="register__main">
      <img className="kids__annimation" src={Kids} alt="" />
      <form onSubmit={formik.handleSubmit} className="register__form">
        <div className="register__top">
          <p className="input__logo">
            Gomes<span className="input__logo__span">Daycare</span>
          </p>
          <p className="tagline__nav">
            Taking care of your kids with love and dedication!
          </p>
          <p className={message ? "general__error" : ""}>{message}</p>
        </div>

        <div>
          {formik.touched.email && formik.errors.email && (
            <div className="register__input__error">
              <p className="error">{formik.errors.email}</p>
            </div>
          )}
          <input
            className="input input--full"
            type="email"
            id="email"
            name="email"
            placeholder="example@test.com"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
            onClick={handleCleanUp}
          />
        </div>
        <div>
          {formik.touched.password && formik.errors.password && (
            <div className="register__input__error">
              <p className="error">{formik.errors.password}</p>
            </div>
          )}
          <input
            className="
input input--full"
            id="password"
            name="password"
            type="password"
            placeholder="Password (min 8 characters)"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
            onClick={handleCleanUp}
          />
        </div>
        <button className="register__btn btn btn--full" type="submit">
          Login
        </button>
        <div className="register__redirect">
          <p>
            Already have an account?{" "}
            <a className="register__redirect__link" href="/auth/register">
              Register
            </a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
