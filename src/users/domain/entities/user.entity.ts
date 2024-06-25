//props q um usuario ira possuir
export type UserProps = {
    name : string
    email: string
    password: string
    createdAt?: Date
}


export class UserEntity {
    constructor(public readonly props:UserProps){
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
