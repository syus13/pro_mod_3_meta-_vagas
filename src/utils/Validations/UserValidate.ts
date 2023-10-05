import * as yup from "yup"


class UserValidate{
    static async isValid(body: any){
        const userValidation = yup.object().shape({
            name: yup.string().required(),
            password: yup.string().required(),
            email: yup.string().email().required(),
          });

          try{
            await userValidation.validate(body)
          } catch(erro: any){
            return {error: true, messages: erro.errors}
          }
    }
}

export {UserValidate}