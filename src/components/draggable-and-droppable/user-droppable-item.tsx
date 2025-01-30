import type { FC } from "react";
import { User } from "../simple-sortable/types";

interface UserDroppableItemProps {
  user: User;
}

const UserDroppableItem: FC<UserDroppableItemProps> = ({ user }) => {
  return (
    <div className="bg-blue-200 p-4 rounded shadow-md flex justify-between">
      <div>
        <h3 className="text-lg font-semibold text-black">{user.name}</h3>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
};

export default UserDroppableItem;
