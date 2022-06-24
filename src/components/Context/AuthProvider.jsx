import { Spin } from "antd";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";

export const AuthContext = createContext(AuthProvider);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscibed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });
        setIsLoading(false);
        navigate("/");
        return;
      }
      setIsLoading(false);
      navigate("/login");
    });

    return () => {
      unsubscibed();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin style={{ position: "fixed", inset: 0 }} /> : children}
    </AuthContext.Provider>
  );
}
