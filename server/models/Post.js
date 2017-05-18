import mongoose from 'mongoose';
// global.Promise = Promise;
mongoose.Promise = global.Promise;

const { Schema } = mongoose;
const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: [20, 'Title must be 5 characters or more']
    },
    link: String ,
    text: String,
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: 'Date',
        default: Date.now,
    },
    _creator: {
        type: Schema.ObjectId, ref: 'User'
    },
    _comments: [{ type: Schema.ObjectId, ref: 'Comment' }]
});

const   Post = mongoose.model('Post', postSchema);

export default Post;