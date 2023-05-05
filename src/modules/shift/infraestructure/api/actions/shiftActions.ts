import { Shift } from '../../../domain/shift';

export const FETCH_SHIFTS = 'FETCH_SHIFTS';
export const FETCH_SHIFT_DETAILS = 'FETCH_SHIFT_DETAILS';
export const CHECKIN_SHIFT = 'CHECKIN_SHIFT';
export const CHECKOUT_SHIFT = 'CHECKOUT_SHIFT';
export const COMPLETE_TASK = 'COMPLETE_TASK';

export const fetchShifts = (shifts: Shift[]) => ({
  type: FETCH_SHIFTS,
  shifts,
});

export const fetchShiftDetails = (shift: Shift) => ({
  type: FETCH_SHIFT_DETAILS,
  shift,
});

export const checkInShift = (id: number) => ({
  type: CHECKIN_SHIFT,
  id,
});

export const checkOutShift = (id: number) => ({
  type: CHECKOUT_SHIFT,
  id,
});

export const completeTask = (id: number, taskId: number) => ({
  type: COMPLETE_TASK,
  id,
  taskId,
});
