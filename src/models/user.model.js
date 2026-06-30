import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bccrypt from "bcrypt";
// bcrypt hmare password pe security ka lia use secure rha 
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true   // ye performance best krta haisoch le 10 lakh user hnnn agr index nhi hogi toh ek ke krke user check krege abb index true hn toh frr ekk sath hi chek krlega bhai 
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String,   // cloudnary  url
            required: true,
        },
        coverImage: {
            type: String,
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password"))
        return next();

    this.password = bcrypt.hash(this.password, 10)
    next()
})

// bhai esme pre use hota for hjust save hona se phle 

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

// this method is check ispassword is coorect 


userSchema.methods.genrateAccessToken = function () {
    return jwt.sign(
        {
            _id: this.id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }

    )
}
userSchema.methods.genrateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this.id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)