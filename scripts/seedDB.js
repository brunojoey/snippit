const mongoose = require('mongoose');
const db = require('../models');

// This file empties the database and inserts new users and snips.
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/snippit', {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const userSeed = [
  {
    username: 'user1',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'user2',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'user3',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'user4',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'user5',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'user6',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'user7',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'user8',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'user9',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'user10',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'user11',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'user12',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  }
];

const snipSeed = {
  body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
  responses: []
}

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
