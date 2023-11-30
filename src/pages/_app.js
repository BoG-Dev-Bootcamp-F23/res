import { useState } from "react";
import { AuthContext } from "@/contexts/useAuth";

export default function App({ Component, props }) {
  const [userID, setUserID] = useState("");
  const [fullName, setFullName] = useState("");
  const [admin, setAdmin] = useState(false);

  return (
    <AuthContext.Provider value={{ userID, setUserID, fullName, setFullName, admin, setAdmin, }}>
      <Component {...props} />
    </AuthContext.Provider>
  );
}
