import { useState } from "react";
import CharactersList from "../../components/CharactersList/CharactersList";
import Header from "../../components/HeaderSection/HeaderSection";
import SearchSection from "../../components/SearchSection/SearchSection";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [resultsCount, setResultsCount] = useState(0);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleResultsCountChange = (count: number) => {
    setResultsCount(count);
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white bg-white text-black">
      <Header />
      <SearchSection onSearch={handleSearch} resultsCount={resultsCount} />
      <main className="flex flex-grow bg-white px-4 md:px-12 text-black pt-3">
        <CharactersList searchTerm={searchTerm} onResultsCountChange={handleResultsCountChange} />
      </main>
    </div>
  );
}
