import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: Number,
    default: 0,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postcode: {
      type: String,
      required: true,
    },
  },
  menu: [
    {
      index: {
        type: Number,
        required: true,
      },
      sectionTitle: {
        type: String,
        required: true,
      },
      sectionDescription: String,
      items: [
        {
          id: String,
          title: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          description: String,
          warningIcons: [String],
        },
      ],
    },
  ],
});

const restaurant = mongoose.model('Restaurant', schema);

export default restaurant;
