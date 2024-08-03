import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import { getMarvelCharacters } from "../../api/api";
import { characterType } from "../CharacterCard/CharacterType";
import { CharactersListProps } from "./CharactersListProps";

export default function CharactersList({
  searchTerm,
  onResultsCountChange,
  favoriteIds = [],
}: CharactersListProps) {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["marvelCharacters", searchTerm],
    queryFn: () => getMarvelCharacters({ nameStartsWith: searchTerm }),
  });

  useEffect(() => {
    if (data?.data?.results) {
      onResultsCountChange(data.data.results.length);
    }
  }, [data, onResultsCountChange]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const characters = data?.data?.results || [];

  const filteredCharacters = favoriteIds.length
    ? characters.filter((character: characterType) =>
        favoriteIds.includes(character.id)
      )
    : characters;

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {filteredCharacters.map((character: characterType) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
