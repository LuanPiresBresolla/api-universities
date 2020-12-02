import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('universities')
class University {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  full_name: string;

  @Column()
  name: string;

  @Column()
  ibge: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @Column()
  zipcode: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  neighborhood: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default University;
