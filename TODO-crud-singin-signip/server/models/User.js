import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    min: 4,
    max: 20,
  },
  password: {
    type: String,
    required: true,
    min: 4,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 20,
  },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", userSchema);
