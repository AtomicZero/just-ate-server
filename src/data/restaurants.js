export default [
  {
    title: 'Very Peri Mcr',
    rating: 4.5,
    reviews: 144,
    address: {
      street: 'Unit 3, 365 Chapel Street',
      city: 'Salford',
      postcode: 'M3 5JT',
    },
    menu: [
      {
        index: 1,
        sectionTitle: 'Sizzling Steaks',
        sectionDescription: 'All steaks are served with either peppercorn or mushroom sauce and 2 sides. Choose a delicious side from rice, mash, fries and peri fried.',
        items: [
          {
            id: '93841900-e890-11ea-adc1-0242ac120002',
            title: 'Chicken Steak',
            price: 8.99,
            description: 'Shredded  chicken steak lightly seasoned with grilled onions & peppers',
          },
          {
            id: '9d1edcb6-e890-11ea-adc1-0242ac120002',
            title: 'Sirloin Steak',
            price: 9.99,
            description: 'Thin shredded sirloin steak lightly seasoned with grilled onions & peppers',
          },
          {
            id: '9fc8c90e-e890-11ea-adc1-0242ac120002',
            title: 'Mix Steak',
            price: 11.49,
            description: 'Chicken shredded steak & sirloin shredded steak, grilled onions & peppers',
          },
        ],
      },
      {
        index: 2,
        sectionTitle: 'Grilled Burgers',
        sectionDescription: 'Make it a Meal comes with fries and drink.',
        items: [
          {
            id: 'a4698f66-e890-11ea-adc1-0242ac120002',
            title: 'Cheese Burger',
            price: 2.99,
            description: '4oz juicy beef patty, cheese slice, onions, lettuce & ketchup',
          },
          {
            id: 'a74d951a-e890-11ea-adc1-0242ac120002',
            title: 'Supreme Cheese Burger',
            price: 3.99,
            description: '6oz juicy beef petty, cheese slice, onions, lettuce & ketchup',
          },
          {
            id: 'aae3e5b2-e890-11ea-adc1-0242ac120002',
            title: 'Chicken Fillet Burger',
            price: 3.99,
            description: 'Chicken fillet with lettuce and mayo',
          },
          {
            id: 'ade29812-e890-11ea-adc1-0242ac120002',
            title: 'Peri Peri Burger',
            price: 3.99,
            description: 'Succulent peri peri chicken fillet with lettuce and spicy mayo',
            warningIcons: ['spicy1'],
          },
          {
            id: 'b1802430-e890-11ea-adc1-0242ac120002',
            title: 'Peri Peri Boom Burger',
            price: 4.49,
            description: 'Succulent peri peri chicken fillet, cheese slice, jalapeno cheese bites, lettuce and spicy mayo',
            warningIcons: ['spicy1'],
          },
          {
            id: 'b433b502-e890-11ea-adc1-0242ac120002',
            title: 'Veg Burger',
            price: 2.99,
            description: 'With cheese, onions and lettuce',
          },
        ],
      },
    ],
  },
  {
    title: 'Taste It Italian',
    rating: 5,
    reviews: 295,
    address: {
      street: '69 Blackfriars Road',
      city: 'Salford',
      postcode: 'M3 7DB',
    },
    menu: [
      {
        index: 1,
        sectionTitle: 'Pizza',
        items: [
          {
            id: 'ab7b89ba-e892-11ea-adc1-0242ac120002',
            title: 'Margherita Pizza',
            price: 5.00,
            description: 'Tomato sauce, mozzarella, fresh basil & olive oil',
            warningIcons: ['veg'],
          },
          {
            id: 'af620c02-e892-11ea-adc1-0242ac120002',
            title: 'Napoli Pizza',
            price: 5.00,
            description: 'Tomato sauce, anchovies, garlic,oregano, olive oil',
          },
          {
            id: 'b28096a6-e892-11ea-adc1-0242ac120002',
            title: 'Diavola Pizza',
            price: 5.50,
            description: 'Tomato sauce, mozzarella, pepperoni & olive oil',
            warningIcons: ['spicy1'],
          },
        ],
      },
      {
        index: 2,
        sectionTitle: 'Appetisers',
        items: [
          {
            id: '01d16942-e893-11ea-adc1-0242ac120002',
            title: 'Hand Cut Chips',
            price: 2.50,
          },
          {
            id: '05ce5f82-e893-11ea-adc1-0242ac120002',
            title: 'Mozzarella Sticks',
            price: 2.00,
            description: 'Deep fried mozzarella sticks',
          },
          {
            id: '090d6f76-e893-11ea-adc1-0242ac120002',
            title: 'Beef Ragu Arancini - 1 Piece',
            price: 3.00,
            description: 'Deep fried rice balls with beef ragu, mozzarella, parmesan & saffron',
          },
          {
            id: '0d5a7e7a-e893-11ea-adc1-0242ac120002',
            title: 'Mushroom Arancini - 1 Piece',
            price: 3.00,
            description: 'Deep fried rice balls with mushrooms, mozzarella, parmesan & saffron',
            warningIcons: ['veg'],
          },
        ],
      },
    ],
  },
];
