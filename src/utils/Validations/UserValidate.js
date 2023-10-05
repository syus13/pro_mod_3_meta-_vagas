import * as yup from "yup"

class UserValidate{
    static async isValid(data){
        const userSchema = yup.object().shape({
            name: yup.string().required(),
            password: yup.string().required(),
            email: yup.string().email().required(),
          });

          try{
            await userSchema.validate(data)
            return {error: false}
          }
          catch(erro){
            return {error: true, messages: erro.errors}
          }
    }
}

export {UserValidate}