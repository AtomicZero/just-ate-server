import express from 'express';

import models from '../models';

const router = express.Router();

const getAllRestaurants = async (_, res) => {
  const restaurants = await models.restaurant.find({});
  res.json({ restaurants });
};

const getAllRestaurantById = async (req, res) => {
  const { id } = req.params;
  const restaurant = await models.restaurant.findById(id);
  res.json({ restaurant });
};

router.get('/restaurants', getAllRestaurants);

router.get('/restaurants/:id', getAllRestaurantById);

export default router;
