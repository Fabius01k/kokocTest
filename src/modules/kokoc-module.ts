import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Kokoc} from "../entities/kokoc-entity";
import {KokocController} from "../controllers/kokoc-controller";
import {KokocService} from "../services/kokoc-service";

@Module({
    imports: [TypeOrmModule.forFeature([Kokoc])],
    providers: [KokocService],
    controllers: [KokocController],
})
export class KokocModule {}