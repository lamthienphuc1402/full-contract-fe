import { Suspense, lazy } from "react";
import BaseLayout from "./layout/BaseLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const Contracts = lazy(() => import("./pages/Contracts"));
const CreateContract = lazy(() => import("./pages/CreateContract"));

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Suspense fallback={<Loading msg={"Loading..."} />}>
          <BaseLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contracts" element={<Contracts />} />
              <Route path="/create" element={<CreateContract />} />
            </Routes>
          </BaseLayout>
        </Suspense>
      </BrowserRouter>
    </main>
  );
};

export default App;
