const loginListMock = [{ id: 1, username: "MonteCarlo", password: "123asd" }];

interface UserAuthInfoProps {
  username: string;
  password: string;
}

export default function useAuthentication(authValues: UserAuthInfoProps) {
  const checkLogin = () => {
    const { username, password } = authValues;
    const register = loginListMock.findIndex(
      (reg: UserAuthInfoProps) =>
        reg.username === username && reg.password === password
    );

    console.info(username, password);

    if (register > -1) return true;

    return false;
  };

  return { checkLogin };
}
