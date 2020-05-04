import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  no!: number;

  @Column()
  subject!: string;

  @Column()
  userName!: string;

  @Column()
  date!: string;

  @Column()
  city!: string;
}
