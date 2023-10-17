const mongoose = require('mongoose');

export const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 16
    },
    email: {
      type: String,
      required: true,
    }
  }
);