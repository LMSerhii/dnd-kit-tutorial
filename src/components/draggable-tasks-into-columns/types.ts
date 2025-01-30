export type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

export interface Column {
  id: TaskStatus;
  title: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
