import type { FC } from "react";
import { Draggable } from "../../shared/draggable/draggable";
import { TaskCard } from "./task-card";
import { Column as ColumnType, Task } from "./types";

interface ColumnProps {
  column: ColumnType;
  tasks: Task[];
}

const Column: FC<ColumnProps> = ({ column, tasks }) => {
  return (
    <div className="flex w-80 flex-col rounded-lg bg-neutral-800 p-4">
      <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
      <div className="flex flex-1 flex-col gap-4">
        {tasks.map((task) => {
          return (
            <Draggable key={task.id} id={task.id}>
              <TaskCard task={task} />
            </Draggable>
          );
        })}
      </div>
    </div>
  );
};

export default Column;
