import mongoose, {connect} from 'mongoose'

class Database{
    static async initialize(){
        try{
            mongoose.connection.once("open", () =>{
                console.log("Database ok")
            }) 
            await connect(process.env.DATABASE_URL as string)
        }
        catch{
            console.log("Database error")
        }
    }
}

export {Database}