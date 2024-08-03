export type CharactersListProps = {
  searchTerm: string;
  onResultsCountChange: (count: number) => void;
  favoriteIds?: number[];
};
