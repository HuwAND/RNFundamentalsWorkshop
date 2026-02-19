import { ReactNode, createContext, useContext, useState } from "react";

interface AuthorisationContextProps {
  isAuthorised: boolean;
  setIsAuthorised: (isAuthorised: boolean) => void;
}

export const AuthorisationContext = createContext<
  AuthorisationContextProps | undefined
>(undefined);

export const AuthorisationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isAuthorised, setIsAuthorised] = useState(false);

  return (
    <AuthorisationContext.Provider value={{ isAuthorised, setIsAuthorised }}>
      {children}
    </AuthorisationContext.Provider>
  );
};

export const useAuthorisation = () => {
  const context = useContext(AuthorisationContext);
  if (!context) {
    throw new Error(
      "useAuthorisation must be used within an AuthorisationProvider",
    );
  }
  return context;
};
