import { createContext, useState, ReactNode, useContext } from "react";

enum EProfile {
  ADMIN = "admin",
  DEFAULT = "default",
}

type TUser = {
  id: string;
  name: string;
  email: string;
  profile: EProfile;
  token: string;
};

type TAuthContext = {
  user: TUser;
  saveUserData: Function;
  logOut: () => void;
};

export const localAuthTag = "@finance:auth";

const AuthContext = createContext<TAuthContext>({} as TAuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const storaged = localStorage.getItem(localAuthTag);

  const defaultData = JSON.parse(storaged || "{}");

  const [userData, setUserData] = useState<TUser>(defaultData);

  const saveUserData = ({ id, name, email, profile, token }: TUser) => {
    setUserData({
      id,
      name,
      email,
      profile,
      token,
    });

    localStorage.setItem(
      localAuthTag,
      JSON.stringify({
        id,
        name,
        email,
        profile,
        token,
      })
    );
  };

  const logOut = () => {
    localStorage.setItem(localAuthTag, "{}");
    setUserData({} as TUser);
  };

  return (
    <AuthContext.Provider value={{ user: userData, saveUserData, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
