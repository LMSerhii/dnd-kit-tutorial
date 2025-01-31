import {
  closestCorners,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useState, type FC } from "react";
import ColumnList from "./column-list";
import { TASKS } from "./data";
import { TaskCard } from "./task-card";
import { Task } from "./types";

const SortableTasksIntoColumns: FC = () => {
  const [tasks, setTasks] = useState<Task[]>(TASKS);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const task = tasks.find((task) => task.id === active.id);
    if (task) {
      setActiveTask(task);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const activeTask = tasks.find((task) => task.id === active.id);
    const overTask = tasks.find((task) => task.id === over.id);

    console.log("activeTask", activeTask);
    console.log("overTask", overTask);
    console.log("over", over);

    if (!activeTask) return;

    // Якщо перетягуємо над іншою задачею (сортування в межах колонки)
    if (overTask) {
      const activeIndex = tasks.findIndex((t) => t.id === active.id);
      const overIndex = tasks.findIndex((t) => t.id === over.id);

      console.log("activeIndex", activeIndex);
      console.log("overIndex", overIndex);
      console.log("activeTask.status", activeTask.status);
      console.log("overTask.status", overTask.status);

      if (activeTask.status === overTask.status) {
        // Сортування в межах однієї колонки
        setTasks(arrayMove(tasks, activeIndex, overIndex));
      } else {
        // Переміщення між колонками
        setTasks((tasks) => {
          console.log("tasks", tasks);
          return tasks.map((task) =>
            task.id === activeTask.id
              ? { ...task, status: overTask.status }
              : task
          );
        });
      }
    } else {
      // Перетягування над колонкою
      const newStatus = over.id as Task["status"];
      setTasks((tasks) =>
        tasks.map((task) =>
          task.id === activeTask.id ? { ...task, status: newStatus } : task
        )
      );
    }
  };

  return (
    <div className="p-4 mx-auto grid gap-2 my-10">
      <h2 className="text-2xl font-bold-mb-4">Sortable Tasks Into Columns</h2>
      <div className="p-4">
        <div className="flex gap-8">
          <DndContext
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            collisionDetection={closestCorners}
          >
            <ColumnList tasks={tasks} />
            <DragOverlay>
              {activeTask ? <TaskCard task={activeTask} /> : null}
            </DragOverlay>
          </DndContext>
        </div>
      </div>
    </div>
  );
};

export default SortableTasksIntoColumns;
