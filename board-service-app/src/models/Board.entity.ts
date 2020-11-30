import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  subject!: string;

  @Column()
  content!: string;

  @Column()
  userName!: string;

  @Column()
  date!: string;

  @Column()
  city!: string;
}
