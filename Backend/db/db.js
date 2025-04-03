const mongoose = require("mongoose");
const connectionString = "mongodb+srv://jaskaranSingh:Jaskaran70870@cluster0.41sr1.mongodb.net"

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected:`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};


module.exports = connectDb