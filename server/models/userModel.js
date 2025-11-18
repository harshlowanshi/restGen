const { mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true,"please fill name "],
    },
    email: {
      type: String,
      require: [true,"please fill email"],
    },
    phone: {
      type: String,
      require: [true,"please fill phone"],
    },
    password: {
      type: String,
      require: [true,"please fill password"],
    },
  },
  {
    timesTemps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
