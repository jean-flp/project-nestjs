import {faker} from '@faker-js/faker';//lib q cria proxies para testes 
import { UserProps } from '../../entities/user.entity';
/**
 * Method usaedo para criar instancias de usuario para serem utilizadas em testes pelo projeto
 */

type Props = {
    name?: string
    email?: string
    password?: string
    createdAt?: Date
}

export function UserDataBuilder(props:Props): UserProps{
    return {
        name: props.name ?? faker.person.fullName(),
        email: props.email ?? faker.internet.email(),
        password: props.password ?? faker.internet.password(),
        createdAt: props.createdAt ?? new Date()
    }
}