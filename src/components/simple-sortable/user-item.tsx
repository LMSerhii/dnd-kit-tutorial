import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { FC } from "react";
import { User } from "./types";

interface UserItemProps {
  user: User;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: user.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="bg-blue-200 p-4 rounded shadow-md flex justify-between"
    >
      <div>
        <h3 className="text-lg font-semibold text-black">{user.name}</h3>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
};

export default UserItem;
