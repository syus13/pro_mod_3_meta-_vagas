import { InferSchemaType, Schema, model } from "mongoose";


const JobSchema = new Schema({
position: {type: String, required: true},
salary: {type: Number, required: true},
city: {type: String, required: true},
website: {type: String, required: true},
company: {type: String, required: true},
description: {type: String, required: true},
link: {type: String, required: true},
technology: {type: String, required: true},
}, {timestamps: true})

type TypeJob = InferSchemaType<typeof JobSchema>

const Job = model("Job", JobSchema)

export{Job, TypeJob}