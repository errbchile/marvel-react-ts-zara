import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = React.lazy(() => import("./pages/DetailPage/DetailPage"));

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<AboutPage />} path="/detail" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
