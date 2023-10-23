import * as yup from "yup";
import { CommonError } from "../../CommonError";
import { STATUS_CODE } from "../../statusCode";

class AuthValidation {
  static async isValid(data: any) {
    const loginSchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    });

    try {
      await loginSchema.validate(data);
      return { erro: false };
    } catch (erro: any) {
      return {
        erro: true,
        message: erro.message,
        status: STATUS_CODE.BAD_REQUEST,
      };
    }
  }
}

export { AuthValidation };
