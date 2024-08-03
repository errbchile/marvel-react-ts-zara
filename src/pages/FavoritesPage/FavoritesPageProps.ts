export type FavoritesPageProps = {
  handleResultsCountChange: (count: number) => void;
  handleSearch: (term: string) => void;
  searchTerm: string;
};
