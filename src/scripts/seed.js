import mongoose from 'mongoose';

import models from '../models';
import { DB_URI, MONGOOSE_OPTIONS } from '../config';
import restaurants from '../data/restaurants';

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

models.restaurant.deleteMany({})
  .then(() => models.restaurant.collection.insertMany(restaurants))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
