import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        _id:{type: String},
        name: {type: String, requered: true},
        email: {type: String, requered: true},
        password: {type: String, required: true}
    },
    {
        versionKey: false
    }
);

const user = mongoose.model('user', userSchema);

export default user;