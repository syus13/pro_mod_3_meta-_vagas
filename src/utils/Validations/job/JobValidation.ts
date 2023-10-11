import * as yup from "yup"
import { CommonError } from "../../CommonError";
import { STATUS_CODE } from "../../statusCode";


class JobValidation{
    static async isValid(data: any){
        const validation = yup.object().shape({
            position: yup.string().required(),
            salary: yup.string().required(),
            city: yup.string().required(),
            website: yup.string().required(),
            company: yup.string().required(),
            description: yup.string().required(),
            link: yup.string().required(),
            technology: yup.string().required(),
          });

          try{
            await validation.validate(data)
          } catch(erro: any){
            return CommonError.build(erro.messages,STATUS_CODE.NOT_FOUND)
            
          }
    }
}

export {JobValidation}