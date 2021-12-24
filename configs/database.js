const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

exports.start = () => {
  mongoose.connect(process.env.ATLAS_URI, () => console.log(`connected to the database server successfully`));
};
