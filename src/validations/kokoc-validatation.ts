import {IsString, Length} from "class-validator";

export class CreateKokocDto {
    @IsString()
    @Length(1, 255)
    title: string;
}

export class UpdateKokocDto {
    @IsString()
    @Length(1, 255)
    title: string;
}