import mongoose from '../database/DatabaseConnect';

const UserModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        allowNull: false
    },
    email:{
        type: String,
        required: true,
        allowNull: false,
        isEmail: true
    },
    about:{
        type: String,
        required: true,
        allowNull: false
    },
    message:{
        type: String,
        required: true,
        allowNull: false
    },
    email_send_to:{
        type: String,
        required: true,
        allowNull: false,
        isEmail: true
    }
});
const User = mongoose.model('User', UserModel);
export default User;