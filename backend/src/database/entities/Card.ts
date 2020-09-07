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

  @Column('boolean', { default: true })
  hasBackgroundColor!: boolean;

  @Column('varchar', { nullable: false })
  fullLogo!: string;

  @Column('varchar', { nullable: false })
  shortLogo!: string;

  fullLogoLink!: string;
  shortLogoLink!: string;

  @BeforeInsert()
  addLinks() {
    const createLinkToImage = (idImage: string) =>
      `http://localhost:3333/images/cards/${idImage}`;

    this.fullLogoLink = createLinkToImage(this.fullLogo);
    this.shortLogoLink = createLinkToImage(this.shortLogo);
  }
}

export default Card;
