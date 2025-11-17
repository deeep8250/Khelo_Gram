import React, { useState } from "react";

const CreateAc = () => {
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { role });
    // TODO: Send data to backend/Firebase/etc.
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-6 gap-6">
      <input
        type="text"
        name="fullname"
        placeholder="Full Name"
        required
        className="h-20 w-full  bg-gray-200 rounded-2xl text-2xl  p-10"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="h-20 w-full  bg-gray-200 rounded-2xl text-2xl  p-10"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="h-20 w-full  bg-gray-200 rounded-2xl text-2xl  p-10"
      />

      <div className="mt-4 ml-7">
        <p className="text-2xl font-bold mb-3">I am signing up as</p>

        <ul className="space-y-4">
          <li className=" rounded-xl p-4 text-xl cursor-pointer shadow-lg">
            <label className="flex items-start gap-3">
              <input
                type="radio"
                name="role"
                value="player"
                required
                checked={role === "player"}
                onChange={(e) => setRole(e.target.value)}
                className="w-6 h-6 accent-black mt-1"
              />
              <div>
                <p className="font-semibold text-2xl">Player</p>
                <p className="text-gray-500 text-1xl">
                  Join tournaments and compete
                </p>
              </div>
            </label>
          </li>

          <li className=" shadow-lg rounded-xl p-4 text-xl cursor-pointer">
            <label className="flex items-start gap-3">
              <input
                type="radio"
                name="role"
                value="organizer"
                required
                checked={role === "organizer"}
                onChange={(e) => setRole(e.target.value)}
                className="w-6 h-6 accent-black mt-1"
              />
              <div>
                <p className="font-semibold text-2xl">Organizer</p>
                <p className="text-gray-500 text-1xl">
                  Host and manage tournaments
                </p>
              </div>
            </label>
          </li>
        </ul>
      </div>

      <button
        type="submit"
        className="bg-black text-white text-3xl p-3 rounded-xl mt-4"
      >
        Create Account
      </button>
    </form>
  );
};

export default CreateAc;
