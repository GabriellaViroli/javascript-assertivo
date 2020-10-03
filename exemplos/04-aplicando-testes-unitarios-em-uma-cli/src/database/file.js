import { promises } from 'fs';

import logger from '../utils/logger.js';
import { toJSON, toString } from './parser.js'
import path from './path.js';

export const loadDatabase = async () => {
  try {
    const buffer = await promises.readFile(databasePath);
    const database = buffer.toString();

    return toJSON(database);
  } catch (err) {
    logger.error('Erro ao carregar dados da base \n', err.message);
  }
};

export const saveDatabase = async data => {
  await promises.writeFile(databasePath, toString(data));
}
