import {
  Entity,
  Column,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { cryptData } from '../../utils/cryptDecrypt';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { nullable: false })
  name!: string;

  @Column('varchar', { nullable: false, unique: true })
  email!: string;

  @Column('varchar', { nullable: false })
  passwordHash!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @BeforeInsert()
  async createNewPasswordHash() {
    this.passwordHash = cryptData(this.passwordHash);
  }
}

export default User;
