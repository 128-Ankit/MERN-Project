const express = require("express");
const router = express.Router();
const authCotrollers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middleware/validate-middleware");
const authMiddlewere = require("../middleware/auth-middleware");

//for Home Page
router.route("/").get(authCotrollers.home);

//Rout API for register page
router.route('/register').post(validate(signupSchema), authCotrollers.Registration);

//Rout API for login page
router.route("/login").post(authCotrollers.Login);
router.route("/user").get(authMiddlewere, authCotrollers.user);

module.exports = router;

