const express = require("express");
const router = express.Router();
const User = require("./User");

router.get("/admin/users", (req, res) => {
  res.send("Listagem de usuários");
});

router.get("/admin/users/create", (req, res) => {
  res.render("admin/users/create");
});

router.post("/users/create", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  res.json({ email, password });
});

// router.post("/categories/save", (req, res) => {
//   var title = req.body.title;
//   if (title != undefined) {
//     Category.create({
//       title: title,
//       slug: slugify(title),
//     }).then(() => {
//       res.redirect("/admin/categories");
//     });
//   } else {
//     res.redirect("/admin/categories/new");
//   }
// });

module.exports = router;
