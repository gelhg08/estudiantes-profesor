const mongoose = require('mongoose');


const connectDatabase = async () => {
  try {
    await mongoose
      .connect("mongodb+srv://angelicamhg31:QgQSMZju0Go4hyjq@cluster0.fpr2abo.mongodb.net/")
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.log(err));
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDatabase;