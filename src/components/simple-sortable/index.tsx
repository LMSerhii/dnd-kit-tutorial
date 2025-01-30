import { useState } from "react";
import { mockData } from "./data";
import UserList from "./user-list";
import { User } from "./types";

const SimpleSortable = () => {
  const [userData, setUserData] = useState<User[]>(mockData);

  return (
    <>
      <UserList data={userData} setData={setUserData} />
    </>
  );
};

export default SimpleSortable;
