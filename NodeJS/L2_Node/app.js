const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const app = express();
const port = 5500;

let users = [
  {
    firstName: "Pavlo",
    lastName: "Makohon",
    email: "pavlo@icloud.com",
    password: "********",
    age: 21,
    city: "Lviv",
  },
  {
    firstName: "User1",
    lastName: "L1",
    email: "u1@icloud.com",
    password: "********",
    age: 99,
    city: "Tokyo",
  },
  {
    firstName: "U2",
    lastName: "l2",
    email: "u2@icloud.com",
    password: "********",
    age: 29,
    city: "Lviv",
  },
];
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "static")));
app.set("view engine", ".hbs");
app.engine("hbs", engine({ defaultLayout: false }));
app.set("views", path.join(__dirname, "static"));

app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/users", (req, res) => {
  if (Object.keys(req.query).length) {
    let userFilter = users.filter(
      (user) => user.age === +req.query.age || user.city === req.query.city
    );
    res.render("users", { users: userFilter });
    return;
  }
  res.render("users", { users });
});
app.get("/users/:userID", (req, res) => {
  const { userID } = req.params;
  if (userID >= users.length) {
    res.render("notFound");
    return;
  }
  const user = users[userID];
  res.render("user", { user });
});
app.get("/error", (req, res) => {
  res.render("error");
});

app.post("/login", (req, res) => {
  for (const user of users) {
    if (user.email === req.body.email) {
      res.redirect("/error");
      return;
    }
  }
  users.push(req.body);
  res.redirect("/users");
});

app.use((req, res) => {
  res.render("notFound");
});
app.listen(port, () => {
  console.log(`Magic on port ${port}`);
});
