import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RQSuperHeroes from "./pages/RQSuperHeroes";
import SuperHeroes from "./pages/SuperHeroes";
import RQSuperHero from "./pages/RQSuperHero";
import ParallelQueriesPage from "./pages/ParallelQueriesPage";
import DynamicParallel from "./pages/DynamicParallel";
import DependentQueries from "./pages/DependentQueries";
import PaginatedQueries from "./pages/PaginatedQueries";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
        <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
        <Route
          path="/rq-dynamic-parallel"
          element={
            <DynamicParallel
              heroIds={[
                1, 3,
              ]} /** Imagine a scenario where the user has a table of ids where he can select multiple ids and fetch their data all at ones. In that case, you will have multiple heroId that the Dynamic component will need to fetch */
            />
          }
        />
        <Route
          path="/rq-dependent"
          element={<DependentQueries email="ericawudi50@gmail.com" />}
        />
        <Route path="/rq-pagination" element={<PaginatedQueries />} />
        <Route path="/rq-super-heroes/:heroId" element={<RQSuperHero />} />
        <Route path="/super-heroes" element={<SuperHeroes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
