import { DndContext } from "@dnd-kit/core";
import { useState, type FC } from "react";
import { Draggable } from "../../shared/draggable/draggable";
import { Droppable } from "../../shared/droppable/droppable";

const UserDraggableList: FC = () => {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = useState(null);

  const draggableMarkup = <Draggable id="draggable">Drag me</Draggable>;

  const handleDragEnd = (event) => {
    const { over } = event;

    setParent(over ? over.id : null);
  };

  return (
    <div className="max-w-2xl mx-auto grid gap-2 my-10">
      <h2 className="text-2xl font-bold-mb-4">User list</h2>
      <DndContext onDragEnd={handleDragEnd}>
        {parent === null ? draggableMarkup : null}

        {containers.map((id) => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
          <Droppable key={id} id={id}>
            {parent === id ? draggableMarkup : "Drop here"}
          </Droppable>
        ))}
      </DndContext>
    </div>
  );
};

export default UserDraggableList;
