import { IShiftRepository } from '../../domain/IShiftRepository';
import { ShiftLocalStorage } from './shiftLocalStorage';

export const createShiftRepository = (): IShiftRepository => {
  return new ShiftLocalStorage();
};
