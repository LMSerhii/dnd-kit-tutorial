import { useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

export interface DroppableProps {
  children: ReactNode;
  id: string;
}

export function Droppable({ children, id }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  const style = {
    color: isOver ? "" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}
