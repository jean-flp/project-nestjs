import { ClassValidatorFields } from "../../class-validator-fields";
import * as ClassValidatorMethods from "class-validator";


class StubClassValidatorFields extends ClassValidatorFields <{field: string}> {

}

describe('ClassValidatorFields unit tests',()=>{
    it("Should initialize errors and validatedData variables with null",()=>{
        const sut = new StubClassValidatorFields();

        expect(sut.errors).toBeNull();
        expect(sut.validatedData).toBeNull();
    })
    it("Should validate with errors",()=>{
        const spyValidatesSync = jest.spyOn(ClassValidatorMethods,"validateSync");//cria uma função mock para test e rastreia o método para ver se foii instanciada na classe sendo testada

        spyValidatesSync.mockReturnValue([
            {
                property: 'field', constraints: {isRequired: 'test error'}
            },
        ])
        const sut = new StubClassValidatorFields();

        expect(sut.validate(null)).toBeFalsy();
        expect(spyValidatesSync).toHaveBeenCalled();
        expect(sut.validatedData).toBeNull();
        expect(sut.errors).toStrictEqual({field: ['test error']});

    })
    it("Should validate without errors",()=>{
        const spyValidatesSync = jest.spyOn(ClassValidatorMethods,"validateSync");//cria uma função mock para test e rastreia o método para ver se foii instanciada na classe sendo testada

        spyValidatesSync.mockReturnValue([]);
        const sut = new StubClassValidatorFields();

        expect(sut.validate({field: "value"})).toBeTruthy();
        expect(spyValidatesSync).toHaveBeenCalled();
        expect(sut.validatedData).toStrictEqual({field: "value"});
        expect(sut.errors).toBeNull();

    })
})