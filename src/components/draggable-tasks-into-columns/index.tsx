import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import ColumnList from "./column-list";
import { TASKS } from "./data";
import { Task } from "./types";

const DraggableTasksIntoColumns = () => {
  const [tasks, setTasks] = useState<Task[]>(TASKS);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as Task["status"];

    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
  };

  return (
    <div className="p-4">
      <div className="flex gap-8">
        <DndContext onDragEnd={handleDragEnd}>
          <ColumnList tasks={tasks} />
        </DndContext>
      </div>
    </div>
  );
};

export default DraggableTasksIntoColumns;
