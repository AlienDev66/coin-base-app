import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity('cards')
class Card {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column('varchar')
  name!: string;

  @Column('varchar', { nullable: false })
  fromHexadecimalColor!: string;

  @Column('varchar', { nullable: false })
  toHexadecimalColor!: string;

  @Column('varchar', { nullable: false })
  logo!: string;

  logoLink!: string;

  @BeforeInsert()
  addLinks() {
    const createLinkToImage = (idImage: string) =>
      `http://localhost:3333/images/cards/${idImage}.svg`;

    this.logoLink = createLinkToImage(this.logo);
  }
}

export default Card;
