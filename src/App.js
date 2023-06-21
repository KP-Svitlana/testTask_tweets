import "./App.css";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);

  return <Button isActive={isActive} />;
}

export default App;
