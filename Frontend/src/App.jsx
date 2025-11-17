import { useState } from "react";
import LoginAndSignUp from "./components/LoginAndSignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen w-full flex justify-center bg-sky-100">
        <LoginAndSignUp />
      </div>
    </>
  );
}

export default App;
