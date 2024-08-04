import { useNavigate } from "react-router-dom";
import redHeart from "../../assets/heart.svg";
import emptyHeart from "../../assets/empty-heart.svg";
import whiteHeart from "../../assets/white-heart.svg";
import { CharacterCardProps } from "./CharacterCardProps";
import { useFavorites } from "../../context/useFavorites";

export default function CharacterCard({ character }: CharacterCardProps) {
  const navigate = useNavigate();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(character.id);

  const handleClick = () => {
    navigate(`/detail/${character.id}`);
  };

  const handleFavoriteToggle = () => {
    if (isFav) {
      removeFavorite(character.id);
    } else {
      addFavorite(character.id);
    }
  };

  const imageUrl = character.thumbnail
    ? `${character.thumbnail.path}.${character.thumbnail.extension}`
    : "https://via.placeholder.com/188x245";

  return (
    <div className="relative bg-white flex flex-col max-h-[245px] max-w-[188px] aspect-w-3 aspect-h-4 corner-cut cursor-pointer">
      <div
        className="card-content h-4/5 flex-grow bg-gray-300"
        onClick={handleClick}
      >
        <img
          src={imageUrl}
          alt={`${character.name} image`}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="curtain-effect"></div>
      <div className="h-1/5 bg-black flex justify-between p-3 items-center text-white border-t-4 border-t-marvel-red">
        <span className="text-xs z-10">{character?.name}</span>
        <div
          className="relative"
          onClick={(e) => {
            e.stopPropagation();
            handleFavoriteToggle();
          }}
        >
          <img
            src={isFav ? redHeart : emptyHeart}
            alt="Icon heart"
            width="13"
            height="12"
            className="z-10 heart-icon"
          />
          <img
            src={whiteHeart}
            alt="Icon heart hover"
            width="13"
            height="12"
            className="z-10 heart-icon-hover absolute top-0 left-0 opacity-0"
          />
        </div>
      </div>
    </div>
  );
}
