import { useState } from "react";
import { auth } from "../firebase/setup";
import { sendPasswordResetEmail } from "firebase/auth";
import style from "../css/forgotpass.module.css";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();    

  const resetPassword = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={style.authcontainer}>
      <div className={style.authcard}>
        <h2>Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={resetPassword}>
          Send Reset Link
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
