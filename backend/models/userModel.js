import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  postalCode: {
    type: String,
    required: true,
  },
  users: [
    {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true, 
      },
      address: {
        type: String,
        required: true,
      },
      profileImageUrl: {
        type: String,
        default: null,
      },
      registeredAt: {
        type: Date,
        default: Date.now, 
      },
    },
  ],
});

const User = mongoose.model('User', userSchema);

export default User;
