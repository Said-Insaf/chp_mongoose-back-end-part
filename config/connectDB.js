// mongoose
const mongoose = require("mongoose");
//connect DB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:2717/mern-f3', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`DB is connected...`);
  } catch (error) {
    console.error(`DB can not connected ${error}`);
  }
};
module.exports = connectDB
