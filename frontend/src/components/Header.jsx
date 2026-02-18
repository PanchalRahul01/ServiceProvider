import style from "../css/header.module.css";
import { Link } from "react-router-dom";
import {auth} from "../firebase/setup";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { useState } from "react";
function Header() {

  const[user,setUser] = useState(null);

  const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
    setUser(currentUser);

    return () => unsubscribe();
  },[]);
  
  const logout = async () => {
    await signOut(auth);
    alert("Logged out");
  };

  return (
    <div className={style.navbar}>
        <h2 className={style.logo}>Service Provider</h2>
        <ul className={style.navLinks}>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/services">Book-Service</Link></li>
             <li><Link to="/provide-Service">Provide-Service</Link></li>
          </ul>
        <div className={style.imgcontainer}>
        {user ? (
          <>
            <button className={style.dashboardButton}><Link className={style.dashboardLink} to="/dashboard" >DashBoard</Link></button>
            <button className={style.loginButton} onClick={logout}>
              Logout
            </button>
          </>  
        ) : (
          <Link className={style.loginButton} to="/login">
            Login
          </Link>
        )}


      </div>
      
    </div>
      
  );
}

export default Header;
