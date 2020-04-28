import { Data } from '../interfaces';
import data from '../../assets/data';

export const load = () => new Promise<Data>((resolve) => resolve(data as Data));
