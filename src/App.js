import "./App.css";

import { useState } from "react";
import { UserCard } from "./components/UserCard/UserCard";

function App() {
  const [isActive, setIsActive] = useState(false);

  return <UserCard isActive={isActive} />;
}

export default App;
