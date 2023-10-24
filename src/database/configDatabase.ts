import mongoose, { connect } from "mongoose";
import { CommonError } from "../utils/CommonError";
import { STATUS_CODE } from "../utils/statusCode";

class Database {
  static async initialize() {
    try {
      await connect(process.env.DATABASE_URL as string);
      mongoose.connection.once("open", () => {
        console.log("Database ok");
      });
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
    }
  }
}

export { Database };
