import { useQuery } from "@tanstack/react-query";
import { getComicsByCharacter } from "../../api/api";
import { ComicType } from "./ComicType";

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
    return <div>Loading comics...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!data?.data?.results.length) {
    return <div>No comics found for this character.</div>;
  }

  return (
    <div className="flex space-x-4 overflow-x-auto">
      {data.data.results.slice(0, 20).map((comic: ComicType) => (
        <div key={comic.id} className="min-w-max">
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
            className="w-40 h-60 object-cover rounded"
          />
          {/* <p className="text-xs font-bold text-black break-words">{comic.title}</p> */}
        </div>
      ))}
    </div>
  );
}
