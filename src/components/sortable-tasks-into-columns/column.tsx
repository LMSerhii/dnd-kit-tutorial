import { FC } from "react";
import { TaskCard } from "./task-card";
import { Column as ColumnType, Task } from "./types";

interface ColumnProps {
  column: ColumnType;
  tasks: Task[];
}

const Column: FC<ColumnProps> = ({ column, tasks }) => {
  return (
    <div className="w-80 rounded-lg bg-neutral-800 p-4">
      <h2 className="mb-4 font-medium text-neutral-200">{column.title}</h2>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
