import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCharacterDetails } from "../../api/api";
import Header from "../../components/HeaderSection/HeaderSection";
import favHeart from "../../assets/detail-fav-heart.svg";
import noFavHeart from "../../assets/no-fav-heart.svg";
import ComicsListByCharacter from "../../components/ComicsListByCharacter/ComicsListByCharacter";
import { useFavorites } from "../../context/useFavorites";

export default function DetailPage() {
  const { characterId } = useParams();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const id = characterId ? parseInt(characterId, 10) : null;
  const isFav = id !== null && isFavorite(id);

  const handleFavoriteToggle = () => {
    if (id !== null) {
      if (isFav) {
        removeFavorite(id);
      } else {
        addFavorite(id);
      }
    }
  };

  const {
    data: characterData,
    error: characterError,
    isLoading: isCharacterLoading,
    isError: isCharacterError,
  } = useQuery({
    queryKey: ["characterDetails", id],
    queryFn: () =>
      id !== null
        ? getCharacterDetails(id)
        : Promise.resolve({ data: { results: [] } }),
    enabled: id !== null,
  });

  if (isCharacterLoading) {
    return <div className="text-black">Loading...</div>;
  }

  if (isCharacterError) {
    return <div className="text-black">Error: {characterError?.message}</div>;
  }

  if (!characterData?.data?.results.length) {
    return <div className="text-black">No character found.</div>;
  }

  const character = characterData.data.results[0];
  const imageUrl = character.thumbnail
    ? `${character.thumbnail.path}.${character.thumbnail.extension}`
    : "https://via.placeholder.com/300x450";

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white bg-white text-black">
      <Header />
      <section className="flex justify-center items-center bg-black text-white p-6 corner-cut">
        <div className="w-full max-w-screen-lg flex flex-col sm:flex-row items-center bg-black text-white p-4 rounded-lg shadow-lg">
          <img
            src={imageUrl}
            alt={`${character.name} image`}
            className="sm:w-1/3 h-auto object-cover rounded-lg"
          />
          <div className="w-full mt-5 sm:mt-0 sm:ml-6 flex flex-col">
            <div className="w-full flex justify-between">
              <h1 className="text-3xl font-bold mb-2">{character.name}</h1>
              <span className="cursor-pointer" onClick={handleFavoriteToggle}>
                <img
                  src={isFav ? favHeart : noFavHeart}
                  alt="favorite icon heart"
                  width="26"
                  height="25"
                />
              </span>
            </div>
            <p>
              <strong>Description:</strong>{" "}
              {character.description || "No description available."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-6">
        <h2 className="text-2xl font-bold mb-4 text-black">COMICS</h2>
        <div className="relative">
          <div className="flex space-x-4 overflow-x-auto pb-4">
            <ComicsListByCharacter characterId={character.id} />
          </div>
        </div>
      </section>
    </div>
  );
}
