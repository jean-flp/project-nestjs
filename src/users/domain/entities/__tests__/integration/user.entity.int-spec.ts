import { UserDataBuilder } from "@/users/domain/testing/helpers/user-data-builder"
import { UserEntity, UserProps } from "../../user.entity"
import { EntityValidationError } from "@/shared/domain/errors/validation-error"

describe('UserEntity Integration tests',()=>{
    describe('Constructor method',()=>{
        it("should throw an error when creating a user with invalid name",()=>{
            let props: UserProps = {
                ...UserDataBuilder({}),
                name: null,
            }

            expect(()=> new UserEntity(props)).toThrow(EntityValidationError);

            props  = {
                ...UserDataBuilder({}),
                name: '',
            }

            expect(()=> new UserEntity(props)).toThrow(EntityValidationError);

            props = {
                ...UserDataBuilder({}),
                name: 3 as any,
            }

            expect(()=> new UserEntity(props)).toThrow(EntityValidationError);

            props = {
                ...UserDataBuilder({}),
                name: 'a'.repeat(256),
            }
            expect(()=> new UserEntity(props)).toThrow(EntityValidationError);
        })
    })
})