import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GameEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    genre: string;

    @Column()
    price: number;

    @Column()
    quantity: number;
}