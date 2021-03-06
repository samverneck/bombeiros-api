import {ClassSchemas, IModelsDAO ,IModelsSchema} from './Schemas'
import { IRethinkDBConfig } from '../config/rethinkdb'

export * from '../interfaces/IUser'
export * from '../interfaces/IAlert'
export {IResultSearch,IDAO,BaseModel} from './Model'
export {User,UserDAO} from './User'
export {APIError} from './APIError'
export {IModelsDAO,IModelsSchema} from './Schemas'

export class Model {
    db: IModelsDAO
    entities: IModelsSchema
    constructor(rethinkdbconfig: IRethinkDBConfig) {
        const classSchema = new ClassSchemas(rethinkdbconfig)
        this.db = classSchema.GetModels()
        this.entities = classSchema.GetModelSchema()
    }
}
