import mongoose , {Schema} from "mongoose";

const contactSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minLength: [2, "Name must be greater than 2 character"],
        maxLength: [20, "Name mus be smaller than 20 character"]
    },

    email:{
        type: String,
        required:[true, "email is required"],
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i, "Invalid email"]
    },

    message:{
        type: String,
        required: [true, "message is required"],
    },

    date:{
        type: Date,
        default: Date.now,
    }
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;