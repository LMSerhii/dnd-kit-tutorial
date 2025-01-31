import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { FC } from "react";
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
        const columnTasks = tasks.filter((task) => task.status === column.id);
        return (
          <Droppable key={column.id} id={column.id}>
            <SortableContext
              items={columnTasks}
              strategy={verticalListSortingStrategy}
            >
              <Column column={column} tasks={columnTasks} />
            </SortableContext>
          </Droppable>
        );
      })}
    </>
  );
};

export default ColumnList;
