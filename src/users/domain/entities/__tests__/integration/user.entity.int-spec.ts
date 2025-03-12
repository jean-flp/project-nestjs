import { UserDataBuilder } from "@/users/domain/testing/helpers/user-data-builder"
import { UserEntity, UserProps } from "../../user.entity"
import { EntityValidationError } from "@/shared/domain/errors/validation-error"

describe('UserEntity Integration tests',()=>{
    describe('Constructor method',()=>{
        it("Should throw an error when creating a user with invalid name",()=>{
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
        it("Should throw an error when creating a user with invalid email",()=>{
            let props: UserProps = {
                ...UserDataBuilder({}),
                email: null,
            }

            expect(()=> new UserEntity(props)).toThrow(EntityValidationError);

            props  = {
                ...UserDataBuilder({}),
                email: '',
            }

            expect(()=> new UserEntity(props)).toThrow(EntityValidationError);

            props = {
                ...UserDataBuilder({}),
                email: 3 as any,
            }

            expect(()=> new UserEntity(props)).toThrow(EntityValidationError);

            props = {
                ...UserDataBuilder({}),
                name: 'a'.repeat(256),
            }
            expect(()=> new UserEntity(props)).toThrow(EntityValidationError);
        })
        it("Should throw an error when creating a user with invalid password",()=>{
            let props: UserProps = {
                ...UserDataBuilder({}),
                password: null,
            }

            expect(()=> new UserEntity(props)).toThrow(EntityValidationError);

            props  = {
                ...UserDataBuilder({}),
                password: '',
            }

            expect(()=> new UserEntity(props)).toThrow(EntityValidationError);

            props = {
                ...UserDataBuilder({}),
                password: 3 as any,
            }

            expect(()=> new UserEntity(props)).toThrow(EntityValidationError);

            props = {
                ...UserDataBuilder({}),
                password: 'a'.repeat(101),
            }
            expect(()=> new UserEntity(props)).toThrow(EntityValidationError);
        })
        it("Should throw an error when creating a user with invalid createdAt",()=>{
            let props: UserProps = {
                ...UserDataBuilder({}),
                createdAt: 'ASD' as any,
            }

            expect(()=> new UserEntity(props)).toThrow(EntityValidationError);

            props  = {
                ...UserDataBuilder({}),
                createdAt: '' as any,
            }

            expect(()=> new UserEntity(props)).toThrow(EntityValidationError);

            props = {
                ...UserDataBuilder({}),
                createdAt: 3 as any,
            }

            expect(()=> new UserEntity(props)).toThrow(EntityValidationError);
        })
        it("Should a valid user",()=>{
            expect.assertions(0);
            let props: UserProps = UserDataBuilder({})
            new UserEntity(props);
        })

    })
    describe('UpdateName method', ()=>{
        it("Should throw an error when creating a user with invalid name",()=>{
            const entity = new UserEntity(UserDataBuilder({}));

            expect(()=> entity.updateName(null)).toThrow(EntityValidationError);
            expect(()=> entity.updateName(3 as any)).toThrow(EntityValidationError);
            expect(()=> entity.updateName('')).toThrow(EntityValidationError);
            expect(()=> entity.updateName('a'.repeat(256))).toThrow(EntityValidationError);
        })
        it("Should update a valid name",()=>{
            expect.assertions(0);

            const entity = new UserEntity(UserDataBuilder({}));

            expect(()=> entity.updateName('Jhonson'))
        })
    })
    describe('UpdatePassword method', ()=>{
        it("Should an invalid user using password field",()=>{
            const entity = new UserEntity(UserDataBuilder({}));

            expect(()=> entity.updatePassword(null)).toThrow(EntityValidationError);
            expect(()=> entity.updatePassword(3 as any)).toThrow(EntityValidationError);
            expect(()=> entity.updatePassword('')).toThrow(EntityValidationError);
            expect(()=> entity.updatePassword('a'.repeat(101))).toThrow(EntityValidationError);
        })
        it("Should update a valid password",()=>{
            expect.assertions(0);
            
            const entity = new UserEntity(UserDataBuilder({}));

            expect(()=> entity.updatePassword('PASSWORD'))
        })
    })
})