import { Shift } from '../domain/shift';
import { IShiftRepository } from '../domain/IShiftRepository';

export class ShiftUseCases {
  constructor(private shiftRepository: IShiftRepository) {}

  async getShifts(): Promise<Shift[]> {
    return this.shiftRepository.getShifts();
  }

  async getShiftDetails(id: number): Promise<Shift> {
    return this.shiftRepository.getShiftById(id);
  }

  async checkInShift(id: number): Promise<void> {
    return this.shiftRepository.checkInShift(id);
  }

  async checkOutShift(id: number): Promise<void> {
    return this.shiftRepository.checkOutShift(id);
  }

  async completeTask(id: number, taskId: number): Promise<void> {
    return this.shiftRepository.completeTask(id, taskId);
  }
}
