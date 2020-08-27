import express from 'express';

const router = express.Router();

const getAllRestaurants = (req, res) => {
  res.json({ res: 'all restaurants' });
};

const getAllRestaurantById = (req, res) => {
  res.json({ res: 'restaurant by id' });
};

router.get('/restaurants', getAllRestaurants);

router.get('/restaurants/:id', getAllRestaurantById);

export default router;
