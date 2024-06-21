const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');
const authMiddleware = require('../middleware/authMiddleware')


// Add a product to favorites
router.post('/favorite', favoriteController.addToFavorite);

// Remove a product from favorites
router.delete('/deletefavorite', favoriteController.removeFromFavorite);

// List all favorites for a user
router.get('/list/:useraccount_id', favoriteController.listUserFavorites);

// Update total likes for a favorite
router.put('/update-likes/:favoriteID', favoriteController.updateTotalLikes);

// Remove a favorite by ID
router.delete('/favorite/:favoriteID', favoriteController.removeFavoriteById);

// Protect the route to list all favorites for a user
router.get('/favorites/user/:useraccount_id', authMiddleware, favoriteController.listUserFavorites);

module.exports = router;
