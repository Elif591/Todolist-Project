export interface ITask {
  id?: number;
  TaskTitle: string;
  Explanation: string;
  Note: string;
  StartDate?: Date;
  FinishDate?: Date;
  Priorty?: boolean;
  Complated?: boolean;
  UserId: number;
}
