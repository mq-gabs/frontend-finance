import { useState } from "react";
import { StyledSign } from "./sign.styles";
import { Input, Button, LogoAndName } from "../../components";
import { signIn } from "../../services";
import { useAuth } from "../../hooks";
import { useNavigate } from "react-router-dom";

export const Sign = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [samePassword, setSamePassword] = useState<string>("");
  const { saveUserData } = useAuth();

  const navigate = useNavigate();

  const goToCreateAccount = (e: any) => {
    e.preventDefault();
    setIsRegister(true);
    setEmail("");
    setPassword("");
  };

  const goToLogIn = (e: any) => {
    e.preventDefault();
    setIsRegister(false);
    setEmail("");
    setPassword("");
    setName("");
    setSamePassword("");
  };

  const logIn = async (e: any) => {
    e.preventDefault();

    const response = await signIn({
      email,
      password,
    });

    saveUserData(response);
    navigate(0);
  };

  const createAccount = (e: any) => {
    e.preventDefault();
  };

  return (
    <StyledSign isregister={String(isRegister)}>
      <div className="sign up">
        <LogoAndName />
        <h1>Crie sua conta</h1>
        <form>
          <Input
            name="Nome"
            type="text"
            value={name}
            placeholder="Nome"
            setValue={setName}
          />
          <Input
            name="E-mail"
            type="text"
            value={email}
            placeholder="E-mail"
            setValue={setEmail}
          />
          <Input
            name="Senha"
            type="password"
            value={password}
            placeholder="Senha"
            setValue={setPassword}
          />
          <Input
            name="Repetir senha"
            type="password"
            value={samePassword}
            placeholder="Repetir senha"
            setValue={setSamePassword}
          />
          <Button onClick={createAccount} text="Criar conta" />
          <Button
            type="secondary"
            onClick={goToLogIn}
            text="Já tenho uma conta"
          />
        </form>
      </div>

      <div className="sign in">
        <LogoAndName />
        <h1>Acesse sua conta</h1>
        <form>
          <Input
            name="E-mail"
            type="text"
            value={email}
            placeholder="E-mail"
            setValue={setEmail}
          />
          <Input
            name="Senha"
            type="password"
            value={password}
            placeholder="Senha"
            setValue={setPassword}
          />
          <Button onClick={logIn} text="Entrar" />
          <Button
            type="secondary"
            onClick={goToCreateAccount}
            text="Não tenho uma conta"
          />
        </form>
      </div>
    </StyledSign>
  );
};
