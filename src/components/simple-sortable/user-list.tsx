import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { Dispatch, SetStateAction } from "react";
import { User } from "./types";
import UserItem from "./user-item";

export interface UserListProps {
  data: User[];
  setData: Dispatch<SetStateAction<User[]>>;
}

const UserList = ({ data, setData }: UserListProps) => {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setData((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto grid gap-2 my-10">
      <h2 className="text-2xl font-bold-mb-4">User list</h2>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex justify-between gap-10">
          <SortableContext items={data}>
            <div className="w-100 flex flex-col gap-0.5">
              {data.map((user) => (
                <UserItem key={user.id} user={user} />
              ))}
            </div>
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
};

export default UserList;
