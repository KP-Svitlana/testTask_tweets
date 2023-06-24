import { lazy } from "react";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/Home"));
const TweetsPage = lazy(() => import("./pages/Tweets"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
