export interface Task {
    id: number;
    description: string;
    completed: boolean;
  }
  
  export interface Shift {
    id: number;
    date_day: string;
    date_month: string;
    place: string;
    address: string;
    start_hour: string;
    end_hour: string;
    status: 'created' | 'closed';
    tasks: Task[];
  }
  