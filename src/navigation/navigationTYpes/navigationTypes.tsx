import { StackNavigationProp } from '@react-navigation/stack';

interface Shift {
  id: number;
  start_datetime: string;
  end_datetime: string;
  round: boolean;
  status: 'created' | 'closed' | 'active';
  extra: any;
} 

export type RootStackParamList = {
  'inicio': undefined;
  'shift': any;
  'shift-details': {shift: Shift};
  'check-in-out': {shift: Shift};
  'activities': {shift: Shift};
};

export type RootNavigationProp = StackNavigationProp<RootStackParamList>;
