import * as yup from "yup"
import { CommonError } from "../../CommonError"
import { STATUS_CODE } from "../../statusCode"

class AuthValidation {
  static async isValid(data: any) {
    const authSchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })

    try {
      await authSchema.validate(data)
      return { error: false }
    } catch(erro: any){
      return CommonError.build(erro.messages,STATUS_CODE.INTERNAL_SERVER_ERROR)
      
    }
  }
}

export { AuthValidation }