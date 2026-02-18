import style from "../css/userCard.module.css";
import { Link } from "react-router-dom";

function UserCardRegisterOrLogin() {
  return (
    <div className={style.userCardRegisterorLogin}>
      <Link className={style.loginLink} to="/login" onClick={() => setShowCard(false)}>Login</Link>
    </div>
  );
}

export default UserCardRegisterOrLogin;
