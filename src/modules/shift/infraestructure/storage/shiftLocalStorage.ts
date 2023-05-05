import AsyncStorage from '@react-native-async-storage/async-storage';
import { Shift, Task } from '../../domain/shift';
import { IShiftRepository } from '../../domain/IShiftRepository';

const SHIFTS_STORAGE_KEY = 'SHIFTS_STORAGE_KEY';

export class ShiftLocalStorage implements IShiftRepository {
  async getShifts(): Promise<Shift[]> {
    const storedShifts = await AsyncStorage.getItem(SHIFTS_STORAGE_KEY);
    return storedShifts ? JSON.parse(storedShifts) : [];
  }

  async getShiftById(id: number): Promise<Shift> {
    const shifts = await this.getShifts();
    return shifts.find((shift) => shift.id === id) || null;
  }

  async checkInShift(id: number): Promise<void> {
    // Implement check-in logic
  }

  async checkOutShift(id: number): Promise<void> {
    // Implement check-out logic
  }

  async completeTask(id: number, taskId: number): Promise<void> {
    const shifts = await this.getShifts();
    const shiftIndex = shifts.findIndex((shift) => shift.id === id);

    if (shiftIndex === -1) {
      throw new Error('Shift not found');
    }

    const taskIndex = shifts[shiftIndex].tasks.findIndex(
      (task) => task.id === taskId,
    );

    if (taskIndex === -1) {
      throw new Error('Task not found');
    }

    shifts[shiftIndex].tasks[taskIndex].completed = true;
    await AsyncStorage.setItem(SHIFTS_STORAGE_KEY, JSON.stringify(shifts));
  }
}
