import { useQuery } from "@tanstack/react-query";
import CharacterCard from "../CharacterCard/CharacterCard";
import { getMarvelCharacters } from "../../api/api";
import { characterType } from "../CharacterCard/CharacterType";

export default function CharactersList() {
  const params = {
    nameStartsWith: "Spider",
    limit: 50,
    offset: 0,
  };

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["marvelCharacters", params],
    queryFn: () => getMarvelCharacters(params),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const characters = data?.data?.results || [];

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {characters.map((character: characterType) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
