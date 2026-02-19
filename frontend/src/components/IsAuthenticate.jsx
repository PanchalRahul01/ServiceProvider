import { Navigate } from "react-router-dom";
import { auth } from "../firebase/setup";

function IsAuthenticate({ children }) {

  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default IsAuthenticate;
