import { ConflictError } from "@/shared/domain/errors/conflict-error";
import { NotFoundError } from "@/shared/domain/errors/notFound-error";
import { InMemoryRepository } from "@/shared/domain/repositories/in-memory.repository";
import { UserEntity } from "@/users/domain/entities/user.entity";
import { UserRepository } from "@/users/domain/repositories/user.repository";

export class UserInMemoryRepository extends InMemoryRepository<UserEntity>implements UserRepository{
    async findByEmail(email: string): Promise<UserEntity> {
        const entity = this.items.find(item => item.email === email);

        if(!entity){
            throw new NotFoundError(`Entity not found using ${email} email.`);
        }
        return entity;
    }
    async emailExists(email: string): Promise<void> {
        const entity = this.items.find(item => item.email === email);

        if(!entity){
            throw new ConflictError(`${email} address is already in use.`);
        }
    }
}



