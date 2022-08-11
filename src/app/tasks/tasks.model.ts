
export interface ITask {
  taskId?: number;
  taskTitle: string;
  explanation: string;
  note: string;
  startDate?: string;
  finishDate?: string;
  priority?: boolean;
  completed?: boolean;
  UserId: number;
}



