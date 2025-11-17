import React, { useState } from "react";
import image from "../assets/image.png";

const SwitchInLoginAndSignUp = ({ click, SetClick }) => {
  return (
    <>
      <div className="flex flex-col justify-center mt-10 items-center">
        <div className="h-30 w-30 mb-9">
          <img src={image} className="object-fit" />
        </div>

        <p className="text-4xl">Welcome to Khelo gram</p>
        <p className="text-2xl text-gray-500">
          Join tournaments, compete, and win prizes!
        </p>
      </div>

      <div className="flex justify-center items-center mt-10 gap-4 bg-gray-200 rounded-3xl p-4 m-7">
        <button
          className="text-3xl w-70 h-15 rounded-2xl"
          style={{ background: click === "signin" ? "white" : "transparent" }}
          onClick={() => SetClick("signin")}
        >
          Sign In
        </button>
        <button
          className="text-3xl  w-70 h-15 rounded-2xl"
          style={{ background: click === "signup" ? "white" : "transparent" }}
          onClick={() => SetClick("signup")}
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default SwitchInLoginAndSignUp;
