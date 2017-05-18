import mongoose from 'mongoose';
// global.Promise = Promise;
mongoose.Promise = global.Promise;

const { Schema } = mongoose;
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: [5, 'Username must be 5 characters or more']
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be at least 8 characters']
    },
    createdAt: {
        type: 'Date',
        default: Date.now,
    }
});

// write encryption

const User = mongoose.model('User', userSchema);

export default User;