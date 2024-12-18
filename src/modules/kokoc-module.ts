import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityService } from './entity.service';
import { EntityController } from './entity.controller';
import {Kokoc} from "../entities/kokoc-entity";

@Module({
    imports: [TypeOrmModule.forFeature([Kokoc])],
    providers: [EntityService],
    controllers: [EntityController],
})
export class EntityModule {}