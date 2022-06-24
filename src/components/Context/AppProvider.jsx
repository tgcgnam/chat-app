import { createContext, useMemo } from "react";
import useFirestore from "../../hooks/useFirestore";
import { AuthContext } from "./AuthProvider";

export const AppContext = createContext(AppProvider);

export default function AppProvider({ children }) {
  const {
    user: { uid },
  } = useContext(AuthContext);

  const roomsCondition = useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);

  const rooms = useFirestore("rooms", roomsCondition);
  console.log(list);

  return <AppContext.Provider value={{ rooms }}>{children}</AppContext.Provider>;
}
