import express from "express";
import createUser from "./services/createUser";

const app = express();

app.get("/", (req, res) => {
  const user = createUser({
    email: "vieweg@gmail.com",
    name: "Rafael",
    password: "123456",
    techs: ["ReactJs", "NodeJS", { title: "React Native", exp: 100 }],
  });
  return res.json(user);
});

app.listen(3333);
