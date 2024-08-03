import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCharacterDetails } from "../../api/api";
import Header from "../../components/HeaderSection/HeaderSection";

export default function DetailPage() {
  const { characterId } = useParams();

  const {
    data: characterData,
    error: characterError,
    isLoading: isCharacterLoading,
    isError: isCharacterError,
  } = useQuery({
    queryKey: ["characterDetails", characterId],
    queryFn: () => getCharacterDetails(parseInt(characterId || "0")),
    enabled: !!characterId,
  });

  if (isCharacterLoading) {
    return <div>Loading...</div>;
  }

  if (isCharacterError) {
    return <div>Error: {characterError?.message}</div>;
  }

  if (!characterData?.data?.results.length) {
    return <div>No character found.</div>;
  }

  const character = characterData.data.results[0];
  console.log({ character });
  const imageUrl = character.thumbnail
    ? `${character.thumbnail.path}.${character.thumbnail.extension}`
    : "https://via.placeholder.com/300x450";

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white bg-white text-black">
      <Header />
      <section className="flex justify-center items-center bg-black text-white p-6">
        <div className="w-full max-w-screen-lg flex flex-row items-center bg-black text-white p-4 rounded-lg shadow-lg">
          <img
            src={imageUrl}
            alt={`${character.name} image`}
            className="w-1/3 h-auto object-cover rounded-lg"
          />
          <div className="ml-6 flex flex-col">
            <h1 className="text-3xl font-bold mb-2">{character.name}</h1>
            <p>
              <strong>Description:</strong>{" "}
              {character.description || "No description available."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-6">
        <h2 className="text-2xl font-bold mb-4 text-black">Comics</h2>
        <div className="relative">
          <div className="flex space-x-4 overflow-x-auto pb-4">comics list</div>
        </div>
      </section>
    </div>
  );
}
