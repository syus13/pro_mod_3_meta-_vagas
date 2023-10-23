import { InferSchemaType, Schema, model } from "mongoose";

const CitySearchSchema = new Schema(
  {
    city: { type: String, required: true },
    technology: { type: String, required: true },
    count: { type: Number, required: true },
  },
  { timestamps: true }
);

type TypeCitySearch = InferSchemaType<typeof CitySearchSchema>;

const CitySearch = model("CitySearch", CitySearchSchema);

export { CitySearch, TypeCitySearch };
