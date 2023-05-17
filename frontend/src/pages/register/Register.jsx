import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../features/auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Kids from "../../assets/books.gif";
import * as Yup from "yup";
import "./Register.css";

const Register = () => {
  const [isEmailTaken, setIsEmailTaken] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      code: "",
      email: "",
      password: "",
      password2: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("name is required")
        .min(3, "name must be 2 characters or longer"),
      email: Yup.string().email("invalid email").required("Email Required"),
      code: Yup.string().required("code is required"),
      password: Yup.string()
        .min(8, "password must be 8 characters or longer")
        .required("Password Required"),
      password2: Yup.string()
        .min(8, "password must be 8 characters or longer")
        .oneOf([Yup.ref("password"), null], "Passwords don't match"),
    }),
    onSubmit: (values) => {},
  });

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
        </div>

        <div>
          {formik.touched.name && formik.errors.name && (
            <div className="register__input__error">
              <p className="error">{formik.errors.name}</p>
            </div>
          )}
          <input
            className="input input--full"
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <div className="register__input__error">
            {isEmailTaken && <p className="error">Email is taken</p>}
          </div>
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
          />
        </div>
        <div>
          {formik.touched.code && formik.errors.code && (
            <div className="register__input__error">
              <p className="error">{formik.errors.code}</p>
            </div>
          )}
          <input
            className="input input--full"
            type="text"
            id="code"
            name="code"
            placeholder="code: 9928a3"
            onBlur={formik.handleBlur}
            value={formik.values.code}
            onChange={formik.handleChange}
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
          />
        </div>
        <div>
          {formik.touched.password2 && formik.errors.password2 && (
            <div className="register__input__error">
              <p className="error">{formik.errors.password2}</p>
            </div>
          )}
          <input
            className="input input--full"
            id="password2"
            name="password2"
            type="password"
            placeholder="Confirm Password"
            onBlur={formik.handleBlur}
            value={formik.values.password2}
            onChange={formik.handleChange}
          />
        </div>

        <button className="register__btn btn btn--full" type="submit">
          Register
        </button>
        <div className="register__redirect">
          <p>
            Already have an account?{" "}
            <a className="register__redirect__link" href="/">
              Login
            </a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
