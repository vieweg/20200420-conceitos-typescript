interface userObject {
  name: string;
  email: string;
  password: string;
  techs: Array<string | techsObject>;
}
interface techsObject {
  title: string;
  exp: number;
}

export default function createUser({
  name,
  email,
  password,
  techs,
}: userObject) {
  const user = {
    name,
    email,
    password,
    techs,
  };
  return user;
}
