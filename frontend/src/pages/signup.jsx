import { useState } from "react";
import { auth } from "../firebase/setup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import style from "../css/loginbox.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signup = async () => {

    if (!name || !email || !password) {
      alert("All fields are required!");
      return;
    }

    try {
      setLoading(true);

      // 1️⃣ Create Firebase User
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const firebaseUser = userCredential.user;

      // 2️⃣ Save user in MySQL (NO password)
      await axios.post("http://localhost:8082/api/users/add", {
        firebaseUid: firebaseUser.uid,
        username: name,
        email: firebaseUser.email,
        password: password
      });

      alert("Signup successful ✅");
      navigate("/login");

    } catch (error) {
      console.log(error.response?.data || error.message);
      alert(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.authcontainer}>
      <div className={style.authcard}>
        <h2>Signup</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={signup} disabled={loading}>
          {loading ? "Creating Account..." : "Signup"}
        </button>
      </div>
    </div>
  );
}

export default Signup;
