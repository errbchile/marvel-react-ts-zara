import CharactersList from "../../components/CharactersList/CharactersList";
import Header from "../../components/HeaderSection/HeaderSection";
import SearchSection from "../../components/SearchSection/SearchSection";
import { HomePageProps } from "./HomePageProps";

export default function HomePage({
  handleResultsCountChange,
  handleSearch,
  searchTerm,
  resultsCount,
}: HomePageProps) {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white bg-white text-black">
      <Header />
      <SearchSection onSearch={handleSearch} resultsCount={resultsCount} />
      <main className="flex flex-grow bg-white px-4 md:px-12 text-black pt-3">
        <CharactersList
          searchTerm={searchTerm}
          onResultsCountChange={handleResultsCountChange}
        />
      </main>
    </div>
  );
}
