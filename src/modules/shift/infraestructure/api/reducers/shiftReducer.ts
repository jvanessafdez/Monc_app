import { Shift } from '../../../domain/shift';
import {
  FETCH_SHIFTS,
  FETCH_SHIFT_DETAILS,
  CHECKIN_SHIFT,
  CHECKOUT_SHIFT,
  COMPLETE_TASK,
} from '../actions/shiftActions';

interface ShiftState {
  shifts: Shift[];
  currentShift?: Shift;
}

const initialState: ShiftState = {
  shifts: [],
  currentShift: undefined,
};

export const shiftReducer = (state = initialState, action: any): ShiftState => {
  switch (action.type) {
    case FETCH_SHIFTS:
      return { ...state, shifts: action.shifts };
   
