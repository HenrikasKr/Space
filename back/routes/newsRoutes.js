const express = require("express");

const {
  getAllNews,
  createNews,
  getNewsById,
  updateNews,
  deleteNews,
} = require("./../controllers/newsController");

const {
  signup,
  signin,
  signout
} = require("../controllers/adminController")

const {
  signupuser,
  signinuser,
  signoutuser,
  getAllUsers,
  getUsername,
  getUsersByUsername,
  getUserById
} = require("../controllers/userControllers")

const {
  getAllChat,
  createChat
} = require("../controllers/chatController")

const router = express.Router();


router.route("/").get(getAllNews);
router.route("/:id").get(getNewsById);
router.route("/addnews").post(createNews);
router.route("/updatenews/:id").patch(updateNews);
router.route("/deletenews/:id").delete(deleteNews);

//admin
router.route('/signup').post(signup);
router.route('/signin').post(signin);
router.route('/signout').post(signout);

//user
router.route('/signupuser').post(signupuser);
router.route('/signinuser').post(signinuser);
router.route('/signoutuser').post(signoutuser);
router.route('/users').post(getAllUsers);
router.route("/users/:id").post(getUserById);
router.route('/getuser').post(getUsersByUsername);

//auth
router.route("/username").post(getUsername);

//chat
router.route("/allchat").post(getAllChat);
router.route("/newchat").post(createChat);

module.exports = router;
