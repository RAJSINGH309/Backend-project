import mongoose , { schema} from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique: true,
        index: true,
        lowercase: true,
        trim: true
    },

     email:{
        type: String,
        required: true,
        unique: true,
        index: true,
        lowercase: true,
        trim: true
    },
     
    avatar:{
        type: String,
        required: false,
    },

    fullname:{
        type: String,
        required: true,
        trim: true,
    },

    coverImage:{
        type: String,
        required: false,
    },

    watchHistory:[
         {
            type: Schema.Types.ObjectId,
            ref: 'Video',
         }
    ],

    password:{
        type: String,
        required: true,
    },

    refreshToken:{
        type: String
    },



},{
    timestamps: true,
})

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function(password) 
{
    return await bcrypt.compare(password, this.password);
}


export const User = mongoose.model('User', userSchema)