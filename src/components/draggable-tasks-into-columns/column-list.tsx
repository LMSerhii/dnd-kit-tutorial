import type { FC } from "react";
import { Droppable } from "../../shared/droppable/droppable";
import Column from "./column";
import { COLUMNS } from "./data";
import { Task } from "./types";

interface ColumnListProps {
  tasks: Task[];
}

const ColumnList: FC<ColumnListProps> = ({ tasks }) => {
  return (
    <>
      {COLUMNS.map((column) => {
        return (
          <Droppable key={column.id} id={column.id}>
            <Column
              column={column}
              tasks={tasks.filter((task) => task.status === column.id)}
            />
          </Droppable>
        );
      })}
    </>
  );
};

export default ColumnList;
