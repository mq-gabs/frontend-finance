import { createContext, useState, FC, ReactNode, useContext } from "react";

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
};

const AuthContext = createContext<TAuthContext>({} as TAuthContext);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<TUser>({} as TUser);

  const saveUserData = ({ id, name, email, profile, token }: TUser) => {
    setUserData({
      id,
      name,
      email,
      profile,
      token,
    });
  };

  return (
    <AuthContext.Provider value={{ user: userData, saveUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
