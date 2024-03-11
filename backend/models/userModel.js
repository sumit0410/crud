import mongoose from "mongoose";

const user = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("User", user);
