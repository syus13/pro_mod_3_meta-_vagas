import { InferSchemaType, Schema, model } from "mongoose";

const TechSearchSchema = new Schema({
    technology: { type: String, required: true },
    count: { type: Number, required: true },
    city: { type: String, required: true }
}, { timestamps: true });

type TypeTechSearch = InferSchemaType<typeof TechSearchSchema>

const TechSearch = model("TechSearch", TechSearchSchema)

export { TechSearch, TypeTechSearch }
