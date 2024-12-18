import {Kokoc} from "../entities/kokoc-entity";
import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";


@Injectable()
export class KokocService {
    constructor(
        @InjectRepository(Kokoc)
        private kokocRepository: Repository<Kokoc>,
    ) {}

    async create(title: string): Promise<Kokoc> {
        const entity = this.kokocRepository.create({ title });
        return this.kokocRepository.save(entity);
    }

    async findAll(search?: string, page = 1, limit = 10): Promise<Kokoc[]> {
        const query = this.kokocRepository.createQueryBuilder('kokoc')
            .where('kokoc.deletedAt IS NULL')
            .orderBy('kokoc.createdAt', 'DESC');

        if (search) {
            query.andWhere('LOWER(kokoc.title) LIKE LOWER(:search)', { search: `%${search}%` });
        }

        return query
            .skip((page - 1) * limit)
            .take(limit)
            .addSelect("DATE_PART('day', COALESCE(kokoc.updatedAt, NOW()) - kokoc.createdAt)", 'difference')
            .getRawAndEntities()
            .then(result => result.entities.map(entity => ({
                ...entity,
                difference: +result.raw.find(row => row.kokoc_id === entity.id).difference,
            })));
    }

    async update(id: string, title: string): Promise<Kokoc> {
        await this.kokocRepository.update(id, { title });
        return this.kokocRepository.findOneByOrFail({ id });
    }

    async delete(id: string): Promise<void> {
        await this.kokocRepository.softDelete(id);
    }
}