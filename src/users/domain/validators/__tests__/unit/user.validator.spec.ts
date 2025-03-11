import { UserDataBuilder } from "@/users/domain/testing/helpers/user-data-builder";
import { UserRules, UserValidator, UserValidatorFactory } from "../../user.validator"
import { UserProps } from "@/users/domain/entities/user.entity";


let sut: UserValidator
let props: UserProps

describe('UserValidator unit tests', () => {
    beforeEach(() => {
        sut = UserValidatorFactory.create();
        props = UserDataBuilder({});
    })
    it("Valid cases of validator user", () => {
        
        const isValid = sut.validate(props);

        expect(isValid).toBeTruthy();
        expect(sut.validatedData).toStrictEqual(new UserRules(props));
    })
    describe('Name Field', () => {
        it("Invalid cases of name field", () => {
            let isValid = sut.validate(null as any);

            expect(isValid).toBeFalsy();
            expect(sut.errors['name']).toStrictEqual([
                'name should not be empty',
                'name must be a string',
                'name must be shorter than or equal to 255 characters'
            ]);

            isValid = sut.validate({...UserDataBuilder({}),name: '' as any});

            expect(isValid).toBeFalsy();
            expect(sut.errors['name']).toStrictEqual(['name should not be empty']);

            isValid = sut.validate({...UserDataBuilder({}),name: 111 as any});

            expect(isValid).toBeFalsy();
            expect(sut.errors['name']).toStrictEqual([ 'name must be a string','name must be shorter than or equal to 255 characters']);

            isValid = sut.validate({...UserDataBuilder({}),name:'a'.repeat(256) as any});

            expect(isValid).toBeFalsy();
            expect(sut.errors['name']).toStrictEqual([ 'name must be shorter than or equal to 255 characters']);
        })
    })

    describe('Email field', () => {
        it("Invalid cases of email field", () => {
            let isValid = sut.validate(null as any);

            expect(isValid).toBeFalsy();
            expect(sut.errors['email']).toStrictEqual([
                'email must be an email',
                'email should not be empty',
                'email must be a string',
                'email must be shorter than or equal to 255 characters'
            ]);

            isValid = sut.validate({...UserDataBuilder({}),email: '' as any});

            expect(isValid).toBeFalsy();
            expect(sut.errors['email']).toStrictEqual(['email must be an email','email should not be empty']);

            isValid = sut.validate({...UserDataBuilder({}),email: 111 as any});

            expect(isValid).toBeFalsy();
            expect(sut.errors['email']).toStrictEqual([ 'email must be an email','email must be a string','email must be shorter than or equal to 255 characters']);

            isValid = sut.validate({...UserDataBuilder({}),email:'a'.repeat(256) as any});

            expect(isValid).toBeFalsy();
            expect(sut.errors['email']).toStrictEqual(['email must be an email', 'email must be shorter than or equal to 255 characters']);
        })
        
    })
    describe('Password field', () => {
        it("Invalid cases of password field", () => {
            let isValid = sut.validate(null as any);

            expect(isValid).toBeFalsy();
            expect(sut.errors['password']).toStrictEqual([
                'password should not be empty',
                'password must be a string',
                'password must be shorter than or equal to 100 characters'
            ]);

            isValid = sut.validate({...UserDataBuilder({}),password: '' as any});

            expect(isValid).toBeFalsy();
            expect(sut.errors['password']).toStrictEqual(['password should not be empty']);

            isValid = sut.validate({...UserDataBuilder({}),password: 111 as any});

            expect(isValid).toBeFalsy();
            expect(sut.errors['password']).toStrictEqual(['password must be a string','password must be shorter than or equal to 100 characters']);

            isValid = sut.validate({...UserDataBuilder({}),password:'a'.repeat(256) as any});

            expect(isValid).toBeFalsy();
            expect(sut.errors['password']).toStrictEqual(['password must be shorter than or equal to 100 characters']);
        })
        
    })

    describe('CreatedAt Field', () => {
        it("Invalid cases of CreatedAt field", () => {
            let isValid = sut.validate({...props,createdAt: 10 as any});

            expect(isValid).toBeFalsy();
            expect(sut.errors['createdAt']).toStrictEqual( [ 'createdAt must be a Date instance' ]);

            isValid = sut.validate({...props,createdAt: 'alo' as any});
            expect(isValid).toBeFalsy();
            expect(sut.errors['createdAt']).toStrictEqual( [ 'createdAt must be a Date instance' ]);

        })
    })

})