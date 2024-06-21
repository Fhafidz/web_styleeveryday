const express = require("express");
const app = express();
const router = express.Router();
const userController = require("../controllers/userController");
const { checkSchema } = require("express-validator");
const createUserValidation = require("../validations/createUserValidation");
const updateUserValidation = require("../validations/updateUserValidation");
const authMiddleware = require("../middleware/authMiddleware")
// Get all users
router.get("/user", userController.getAllUsers);

// Register a new user
router.post(
  "/register",
  checkSchema(createUserValidation),
  userController.createNewUser
);

// Login route remains open to all
router.post('/login', userController.loginUser);

// Apply authMiddleware to routes that require an authenticated user
router.put("/update/:id", authMiddleware, checkSchema(updateUserValidation), userController.updateUserById);
router.delete("/:id", authMiddleware, userController.deleteUserById);

// Get a user by ID
router.get("/:id", userController.getUserById);

// Route to get a user by UserID
router.get('/by-userid/:userId', userController.getUserByUserID);

// Route to get a user by UserName
router.get('/by-username/:username', userController.getUserByUserName);

module.exports = router;
