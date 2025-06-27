const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  ingredients: [
    {
      type: String,
      required: true,
    },
  ],
  instructions: {
    type: String,
  },
  category: {
    type: String,
    enum: ["Breakfast", "Lunch/Dinner", "Snacks", "Desserts", "Drinks", "Salads"],
    required: true,
  },
  image: {
    type: String, // URL or base64
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
