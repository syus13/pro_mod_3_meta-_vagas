import * as yup from "yup";
import { CommonError } from "../../CommonError";
import { STATUS_CODE } from "../../statusCode";

class UserValidation {
  static async isValid(data: any) {
    const validation = yup.object().shape({
      name: yup.string().required(),
      password: yup.string().required(),
      email: yup.string().email().required(),
    });

    try {
      await validation.validate(data);
    } catch (erro: any) {
      return CommonError.build(
        erro.messages,
        STATUS_CODE.INTERNAL_SERVER_ERROR
      );
    }
  }
}

export { UserValidation };
