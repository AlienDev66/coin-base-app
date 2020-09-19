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
        logo: 'bitcoin',
        fromHexadecimalColor: '#FF8000',
        toHexadecimalColor: '#E34141',
      },
      {
        name: 'Ethereum',
        logo: 'ethereum',
        fromHexadecimalColor: '#00E0FF',
        toHexadecimalColor: '#0047FF',
      },
      {
        name: 'Amazon',
        logo: 'amazon',
        fromHexadecimalColor: '#150B00',
        toHexadecimalColor: '#150B00',
      },
      {
        name: 'AppStore&ITunes',
        logo: 'apple',
        fromHexadecimalColor: '#00E0FF',
        toHexadecimalColor: '#0047FF',
      },
      {
        name: 'Steam',
        logo: 'steam',
        fromHexadecimalColor: '#000',
        toHexadecimalColor: '#000',
      },
      {
        name: 'GooglePlay',
        logo: 'googlePlay',
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
