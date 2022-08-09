export interface ITask {
  id?: number;
  TaskTitle: any;
  Explanation: any;
  Note: any;
  StartDate?: Date;
  FinishDate?: Date;
  Priorty?: boolean;
  Complated?: boolean;
  UserId: number;
}
