import {validate as uuidValidate} from 'uuid'
import { Entity } from '../../entity';

type StubProps = {
    prop1: string,
    prop2: number
}
class StubEntity extends Entity<StubProps>{

}
describe('UserEntity unit tests', ()=>{

    it('Should set props and id', ()=>{
       const props = {
        prop1: 'value1',
        prop2: 15
       }
       const entity = new StubEntity(props);

       expect(entity.props).toStrictEqual(props);
       expect(entity.id).not.toBeNull();
       expect(uuidValidate(entity.id)).toBeTruthy();
    })
    it('Should accept a valid uuid', ()=>{
        const props = {
         prop1: 'value1',
         prop2: 15
        }
        const id = 'bc7dc435-6715-4e6d-a6e7-6aa4d8e13e5c'; //uuid valido pego da internet 
        const entity = new StubEntity(props,id);
 
        expect(uuidValidate(entity.id)).toBeTruthy();
        expect(entity.id).toBe(id);
     })
     it('Should convert entity to JSON', ()=>{
        const props = {
         prop1: 'value1',
         prop2: 15
        }
        const id = 'bc7dc435-6715-4e6d-a6e7-6aa4d8e13e5c'; //uuid valido pego da internet 
        const entity = new StubEntity(props,id);
        expect(entity.toJSON()).toStrictEqual({
            id,
            ...props,
        });
     })
})