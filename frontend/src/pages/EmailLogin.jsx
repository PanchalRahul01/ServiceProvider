import { useState } from "react";
import { auth } from "../firebase/setup";
import {signInWithEmailAndPassword,sendPasswordResetEmail} from "firebase/auth";
import { Link } from "react-router-dom";
import style from "../css/loginbox.module.css";
import ForgotPassword from "./forgotepass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
      navigate("/Home");

    } catch (error) {
      alert(error.message);
    }
  };

  const forgotPassword = async () => {
    if (!email) {
      alert("Enter email first");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={style.authcontainer}>
  <div className={style.authcard}>
    <h2>Login</h2>

    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

    <button onClick={login}>Login</button>
    <Link to="/forgot-password">Forgot Password?</Link>
    <p className={style.signuptext}>
      Don't have an account? <Link to="/signup">Signup</Link>
    </p>
  </div>
</div>
  );
}

export default Login;
