import React from "react";

const UserInfo = () => {
  return (
    <div className="grid place-items-center h-dvh">
      <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
        <div>
          Name: <span className="font-bold">John Does</span>
        </div>
        <div>
          email: <span className="font-bold">John Does@gmail</span>
        </div>

        <button className="bg-red-500 text-white font-bold px-6 py-2 mt-3"></button>
      </div>
    </div>
  );
};

export default UserInfo;
