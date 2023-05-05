import { Shift } from './shift';

export interface IShiftRepository {
  getShifts(): Promise<Shift[]>;
  getShiftById(id: number): Promise<Shift>;
  checkInShift(id: number): Promise<void>;
  checkOutShift(id: number): Promise<void>;
  completeTask(id: number, taskId: number): Promise<void>;
}
