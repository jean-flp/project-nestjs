import { UserEntity, UserProps } from '../../user.entity';
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
describe('UserEntity unit tests', ()=>{

    let props: UserProps;
    let sut: UserEntity;

    beforeEach(()=>{
        UserEntity.validate = jest.fn();
        props = UserDataBuilder({});
        sut = new UserEntity(props);

    })

    it('Constructor method', ()=>{
        expect(UserEntity.validate).toHaveBeenCalled();
        expect(sut.props.name).toEqual(props.name);
        expect(sut.props.email).toEqual(props.email);
        expect(sut.props.password).toEqual(props.password);
        expect(sut.props.createdAt).toBeInstanceOf(Date);
    })

    it('Getters of name field', ()=>{
        expect(sut.props.name).toBeDefined();
        expect(sut.props.name).toEqual(props.name);
        expect(typeof sut.props.name).toBe('string');
    })
    it('Setter of name field', ()=>{
        sut['name'] = 'test';
        expect(sut.props.name).toEqual('test');
        expect(typeof sut.props.name).toBe('string');
    })
    it('Getters of email field', ()=>{
        expect(sut.props.email).toBeDefined();
        expect(sut.props.email).toEqual(props.email);
        expect(typeof sut.props.email).toBe('string');
    })
    it('Getters of password field', ()=>{
        expect(sut.props.password).toBeDefined();
        expect(sut.props.password).toEqual(props.password);
        expect(typeof sut.props.password).toBe('string');
    })
    it('Setter of password field', ()=>{
        sut['password'] = 'test';
        
        expect(sut.props.password).toEqual('test');
        expect(typeof sut.props.password).toBe('string');
    })
    it('Getters of createdAt field', ()=>{
        expect(sut.props.createdAt).toBeDefined();
        expect( sut.props.createdAt).toBeInstanceOf(Date);
    })
    it('Should update a user', ()=>{
        
        sut.updateName('test');
        sut.updatePassword('test');
        expect(UserEntity.validate).toHaveBeenCalled();
        expect(sut.props.name).toEqual('test');
        expect(sut.props.password).toEqual('test');
    })


    
})