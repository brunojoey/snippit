const mongoose = require('mongoose');
const db = require('../models');

// This file empties the database and inserts new users and snips.
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/snippit', {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

// Used to add snips for each user.
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const userSeed = [
  {
    username: 'harry',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'hermoine',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'ron',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'malfoy',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'voldemort',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'umbridge',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'snape',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'dumbledore',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'longbottom',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'lovegood',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'sirius',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  },
  {
    username: 'hagrid',
    password: 'password',
    imageUrl: 'https://picsum.photos/200',
    snips: []
  }
];

const snipSeed = {
  tagLine: 'How do you insert an element into an array?',
  body: '<p>I\'m suuuuper confused by this. Please help!</p>',
  responses: []
}

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(async data => {
    console.log(data.result.n + ' records inserted!');

    const users = await db.User.find();
    await db.Snip.remove({});

    await asyncForEach(users, async (user) => {
      let seed = snipSeed;
      seed.userId = user._id;
      await db.Snip
        .create(seed)
        .then(dbSnip => db.User.findOneAndUpdate({ _id: user._id }, { $push: { snips: dbSnip._id } }, { new: true }))
        .catch(err => console.log(err));
    });

    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

