import React, { Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Lazy-loaded components
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const DetailPage = React.lazy(() => import("./pages/DetailPage/DetailPage"));

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
            <Route element={<DetailPage />} path="/detail/:characterId" />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
