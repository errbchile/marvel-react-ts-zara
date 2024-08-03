export type HomePageProps = {
  handleResultsCountChange: (count: number) => void;
  handleSearch: (term: string) => void;
  searchTerm: string;
  resultsCount: number;
};
