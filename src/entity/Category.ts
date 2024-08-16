import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({ nullable: true })
    description: string

}
