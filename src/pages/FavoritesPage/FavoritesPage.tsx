import CharactersList from "../../components/CharactersList/CharactersList";
import Header from "../../components/HeaderSection/HeaderSection";
import SearchSection from "../../components/SearchSection/SearchSection";
import { useFavorites } from "../../context/favoritesContext";
import { FavoritesPageProps } from "./FavoritesPageProps";

export default function FavoritesPage({
  handleResultsCountChange,
  searchTerm,
  handleSearch
}: FavoritesPageProps) {
  const { favoriteIds } = useFavorites();

  if (favoriteIds.length === 0) {
    return (
      <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white bg-white text-black">
        <Header />
        <main className="flex flex-grow bg-white px-4 md:px-12 text-black pt-3">
          <div>No favorites found</div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white bg-white text-black">
      <Header />
      <SearchSection onSearch={handleSearch} resultsCount={favoriteIds.length} />
      <main className="flex flex-grow bg-white px-4 md:px-12 text-black pt-3">
        <CharactersList
          favoriteIds={favoriteIds}
          searchTerm={searchTerm}
          onResultsCountChange={handleResultsCountChange}
        />
      </main>
    </div>
  );
}
