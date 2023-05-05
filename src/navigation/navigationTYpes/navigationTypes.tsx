import { StackNavigationProp } from '@react-navigation/stack';

interface Shift {
  id:number;
  client:string;
  start_datetime: string;
  end_datetime: string;
  place_name: string;
  project_name:string;
  address: string;
  allocated_hours: number | null;
  owner: string;
  round:boolean
  status: 'created' | 'closed' | 'active';
  phone: string;
  project: string;
  description: string;
}

export type RootStackParamList = {
  'inicio': undefined;
  'shift': any;
  'shift-details': {shift: Shift};
  'check-in-out': {shift: Shift};
};

export type RootNavigationProp = StackNavigationProp<RootStackParamList>;
