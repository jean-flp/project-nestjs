import { Entity } from "@/shared/domain/entities/entity"

//props q um usuario ira possuir
export type UserProps = {
    name : string
    email: string
    password: string
    createdAt?: Date
}
//excessao no DDD e clean arch para utilização de lib na camada de dominio, uuidv4


export class UserEntity extends Entity<UserProps>{
    constructor(public readonly props:UserProps, id?:string){
        super(props,id);
        this.props.createdAt = this.props.createdAt ?? new Date();
    }

    get name() {
        return this.props.name;
    }
    get email() {
        return this.props.email;
    }
    get password() {
        return this.props.password;
    }
    get createdAtr() {
        return this.props.createdAt;
    }
}
