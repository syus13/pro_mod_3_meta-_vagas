import { InferSchemaType, Schema, model } from "mongoose";


const UserSearchHistorySchema = new Schema({
  userId: { type: String, required: true },
  searchQuery: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  
});

type TypeUserSearchHistory = InferSchemaType<typeof UserSearchHistorySchema>

const UserSearchHistory = model("UserSearchHistory", UserSearchHistorySchema);

export { UserSearchHistory, TypeUserSearchHistory };
