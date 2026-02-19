import { useState } from "react";
import { auth } from "../firebase/setup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import style from "../css/loginbox.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    try {

      // 1️⃣ Create Firebase user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // 2️⃣ Save in MySQL (NO password)
      await axios.post("http://localhost:8082/api/users", {
        firebaseUid: user.uid,
        username: username,
        email: user.email,
        role: "USER"
      });

      alert("Signup successful ✅");
      navigate("/login");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={style.authcontainer}>
      <div className={style.authcard}>
        <h2>Signup</h2>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={signup}>Signup</button>
      </div>
    </div>
  );
}

export default Signup;
