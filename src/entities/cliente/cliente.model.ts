import { Restaurante } from "../restaurante/restaurante.model";
import { Type, Exclude } from "class-transformer";
import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../base-entity";
import {
    Length,
    IsEmail,
    IsNumberString,
    IsString,
    IsNotEmpty,
    IsOptional
} from "class-validator";

@Entity()
export class Cliente extends BaseEntity {
    @Column({ unique: true })
    @IsNotEmpty({ message: "E-mail não pode ser vazio." })
    @IsEmail({ require_tld: true }, { message: "E-mail inválido." })
    public email: string;

    @Column({
        length: 20,
        unique: true
    })
    @Length(14, 20)
    @IsNotEmpty()
    @IsNumberString()
    public cnpj: string;

    @Column({
        length: 50
    })
    @IsNotEmpty()
    @Exclude({ toPlainOnly: true })
    public senha: string;

    @Column({
        nullable: true
    })
    @IsOptional()
    @IsNumberString()
    public telefone: string;

    @Column({
        length: 100
    })
    @IsNotEmpty()
    @IsString()
    public nome: string;

    @Column({
        nullable: true
    })
    @IsOptional()
    @IsString()
    public token: string;

    @OneToMany(type => Restaurante, r => r.cliente)
    @Type(() => Restaurante)
    public restaurantes: Restaurante[];

}
