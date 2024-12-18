import {Body, Controller, Delete, Get, Param, Post, Put, Query} from "@nestjs/common";
import {KokocService} from "../services/kokoc-service";
import {CreateKokocDto, UpdateKokocDto} from "../validations/kokoc-validatation";

@Controller('kokoc')
export class KokocController {
    constructor(private readonly kokocService: KokocService) {}

    @Post()
    create(@Body() createKokocDto: CreateKokocDto) {
        return this.kokocService.create(createKokocDto.title);
    }

    @Get()
    findAll(
        @Query('search') search?: string,
        @Query('page') page = 1,
        @Query('limit') limit = 10
    ) {
        return this.kokocService.findAll(search, +page, +limit);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateKokocDto: UpdateKokocDto) {
        return this.kokocService.update(id, updateKokocDto.title);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.kokocService.delete(id);
    }
}