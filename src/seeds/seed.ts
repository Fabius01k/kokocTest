import {Kokoc} from "../entities/kokoc-entity";
import {DataSource} from "typeorm";

const seed = async () => {
    const dataSource = new DataSource({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: [Kokoc],
        ssl: { rejectUnauthorized: false },
    });

    await dataSource.initialize();

    for (let i = 0; i < 1000; i++) {
        const entity = new Kokoc();
        entity.title = `Title ${i}`;
        await dataSource.manager.save(entity);
    }

    await dataSource.destroy();
};

seed();