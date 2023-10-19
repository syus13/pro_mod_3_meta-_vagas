import { InferSchemaType, Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {type: String, required: true},
    password:{type: String, required:true},
    email: {type: String, required: true, unique:true},
   
}, {timestamps:true})

type TypeUser = InferSchemaType<typeof UserSchema>

const User = model("User", UserSchema)

export {User, TypeUser}