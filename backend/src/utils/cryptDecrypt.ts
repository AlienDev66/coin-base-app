import bycript from 'bcrypt';

export const cryptData = (dataToCrypt: string): string =>
  bycript.hashSync(dataToCrypt, 10);

export const compareCryptedData = (
  dataEncrypted: string,
  dataToCompare: string
): boolean => bycript.compareSync(dataToCompare, dataEncrypted);
