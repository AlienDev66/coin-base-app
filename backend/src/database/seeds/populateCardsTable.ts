import { getRepository } from 'typeorm';
import { typeOrmConnection } from '../../database';
import Card from '../entities/Card';

async function createDefaultCards() {
  try {
    await typeOrmConnection;

    const cardRepository = getRepository(Card);

    const cardsToCreate = cardRepository.create([
      {
        name: 'Bitcoin',
        fullLogo: 'fullLogoBitcoin',
        shortLogo: 'shortLogoBitcoin',
        fromHexadecimalColor: '#FF8000',
        toHexadecimalColor: '#E34141',
      },
      {
        name: 'Ethereum',
        fullLogo: 'fullLogoEthereum',
        shortLogo: 'shortLogoEthereum',
        fromHexadecimalColor: '#00E0FF',
        toHexadecimalColor: '#0047FF',
      },
      {
        name: 'Amazon',
        fullLogo: 'fullLogoAmazon',
        shortLogo: 'shortLogoAmazon',
        fromHexadecimalColor: '#150B00',
        toHexadecimalColor: '#150B00',
        hasBackgroundColor: false,
      },
      {
        name: 'AppStore&ITunes',
        fullLogo: 'fullLogoAppStore&ITunes',
        shortLogo: 'shortLogoAppStore&ITunes',
        fromHexadecimalColor: '#00E0FF',
        toHexadecimalColor: '#0047FF',
      },
      {
        name: 'Steam',
        fullLogo: 'fullLogoSteam',
        shortLogo: 'shortLogoSteam',
        fromHexadecimalColor: '#000',
        toHexadecimalColor: '#000',
        hasBackgroundColor: false,
      },
      {
        name: 'GooglePlay',
        fullLogo: 'fullLogoGooglePlay',
        shortLogo: 'shortLogoGooglePlay',
        fromHexadecimalColor: '#99FDD9',
        toHexadecimalColor: '#1E62A1',
      },
    ]);

    await cardRepository.save(cardsToCreate);

    console.log('Right');
  } catch (err) {
    console.log('error', err.message);
  }
}

createDefaultCards();
