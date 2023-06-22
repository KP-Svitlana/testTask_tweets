import "./App.css";

import { useState } from "react";

import { UsersList } from "./components/UsersList/UsersList";

function App() {
  const [isActive, setIsActive] = useState(false);

  return <UsersList isActive={isActive} />;
}

export default App;
