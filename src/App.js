import { lazy, Suspense } from "react";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/Home"));
const TweetsPage = lazy(() => import("./pages/Tweets"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
