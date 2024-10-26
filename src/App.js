import HomePage from "./HomePage";
import { useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [username, setUsername] = useState("");
  return (
    <div>
      <Navbar setUsername={setUsername}></Navbar>
      <HomePage username={username}></HomePage>
    </div>
  );
}

export default App;
