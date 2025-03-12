import { Entity } from "@/shared/domain/entities/entity";
import { NotFoundError } from "@/shared/domain/errors/notFound-error";
import { InMemoryRepository } from '@/shared/domain/repositories/in-memory.repository';

type StubEntityProps = {
    name: string;
    price: number;
}
class StubEntity extends Entity<StubEntityProps>{}

class StubInMemoryRepository extends InMemoryRepository<StubEntity>{}

describe('InMemoryRepository Unit test', ()=>{
    let sut: StubInMemoryRepository

    beforeEach(()=>{
        sut = new StubInMemoryRepository();
    })
    it('Should insert a new entity',async ()=>{
        const entity = new StubEntity({name: 'test',price: 3});

        await sut.insert(entity);
        expect(entity.toJSON()).toStrictEqual(sut.items[0].toJSON());
    })
    it('Should throw an error when entity not found',async ()=>{
        await expect(sut.findById('WRONG_ID')).rejects.toThrow(new NotFoundError('Entity not found.'));
    })

    it('Should Find an entity by Id',async ()=>{
        const entity = new StubEntity({name: 'test',price: 3});
        await sut.insert(entity);

        const searchedEntity = await sut.findById(entity.id);
        expect(entity.toJSON()).toStrictEqual(searchedEntity.toJSON());
    })
})