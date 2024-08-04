import { useQuery } from "@tanstack/react-query";
import { getComicsByCharacter } from "../../api/api";
import { ComicType } from "./ComicType";
import ComicCardByCharacter from "../ComicCardByCharacter/ComicCardByCharacter";

export default function ComicsListByCharacter({
  characterId,
}: {
  characterId: number;
}) {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["comicsByCharacter", characterId],
    queryFn: () => getComicsByCharacter(characterId),
    enabled: !!characterId,
  });

  if (isLoading) {
    return <div className="text-black">Loading comics...</div>;
  }

  if (isError) {
    return <div className="text-black">Error: {error.message}</div>;
  }

  if (!data?.data?.results.length) {
    return (
      <div className="text-black">No comics found for this character.</div>
    );
  }

  return (
    <div className="flex space-x-4 overflow-x-auto">
      {data.data.results.slice(0, 20).map((comic: ComicType) => (
        <ComicCardByCharacter key={comic.id} comic={comic} />
      ))}
    </div>
  );
}
