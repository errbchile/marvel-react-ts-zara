import React, { Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FavoritesProvider } from "./context/favoritesContext";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const DetailPage = React.lazy(() => import("./pages/DetailPage/DetailPage"));
const FavoritesPage = React.lazy(
  () => import("./pages/FavoritesPage/FavoritesPage")
);

function App() {
  const client = new QueryClient();

  const [searchTerm, setSearchTerm] = useState("");
  const [resultsCount, setResultsCount] = useState(0);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleResultsCountChange = (count: number) => {
    setResultsCount(count);
  };

  return (
    <QueryClientProvider client={client}>
      <FavoritesProvider>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route
                element={
                  <HomePage
                    handleResultsCountChange={handleResultsCountChange}
                    handleSearch={handleSearch}
                    searchTerm={searchTerm}
                    resultsCount={resultsCount}
                  />
                }
                path="/"
              />
              <Route
                element={
                  <FavoritesPage
                    handleResultsCountChange={handleResultsCountChange}
                    handleSearch={handleSearch}
                    searchTerm={searchTerm}
                  />
                }
                path="/favorites"
              />
              <Route element={<DetailPage />} path="/detail/:characterId" />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </FavoritesProvider>
    </QueryClientProvider>
  );
}

export default App;
