export enum TodoType {
  Homework = "Homework",
  Project = "Project",
  Community_Service = "Community_Service",
}

export interface TodoResponse {
  id: string;
  type: TodoType;
  title: string;
  description: string;
  date: Date;
  attachments: Number;
}

export type Todo = TodoResponse
