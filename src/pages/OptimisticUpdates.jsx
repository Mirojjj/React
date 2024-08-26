import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/users/userSlice";

const OptimisticUpdates = () => {
  const intialInput = {
    name: "",
    auraPoints: "",
  };
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(intialInput);

  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ ...formData, id: uuidv4() }));
    setFormData(intialInput);
    // console.log(users);
  };

  return (
    <div className=" min-h-screen flex flex-col items-center justify-around">
      For the user to be added or not added completely depends on your luck!{" "}
      <br />
      How many user add streak can your luck maintain?
      {users && (
        <div className="users text-center">
          <div className="grid grid-cols-4 gap-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="border min-w-[40px] min-h-[40px] flex flex-col justify-center items-center p-4"
              >
                <div className="font-bold">{user.name}</div>
                <div className="mt-2 text-sm">Name: {user.name}</div>
                <div className="mt-1 text-sm">
                  Aura points: {user.auraPoints}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          className=" border border-black rounded-xl p-3"
          name="name"
          type="text"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <input
          className=" border border-black rounded-xl p-3"
          name="auraPoints"
          type="number"
          placeholder="Enter aura points"
          value={formData.auraPoints}
          onChange={handleChange}
        />
        <br />
        <br />
        {error && <p className=" text-center text-red-500">{error}</p>}
        <br />
        <div className="flex items-center justify-center">
          {" "}
          <button
            type="submit"
            disabled={loading}
            className=" bg-blue-400 border border-blue-400 p-3 rounded-xl text-white"
          >
            {loading ? "Adding..." : "Add User"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OptimisticUpdates;
