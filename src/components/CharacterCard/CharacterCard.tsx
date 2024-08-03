import heart from "../../assets/heart.svg";
import { CharacterCardProps } from "./CharacterCardProps";

export default function CharacterCard({ character }: CharacterCardProps) {
  const imageUrl = character.thumbnail
    ? `${character.thumbnail.path}.${character.thumbnail.extension}`
    : "https://via.placeholder.com/188x245";

  return (
    <div className="relative bg-white flex flex-col max-h-[245px] max-w-[188px] aspect-w-3 aspect-h-4 corner-cut cursor-pointer">
      <div className="card-content h-4/5 flex-grow bg-gray-300">
        <img
          src={imageUrl}
          alt={`${character.name} image`}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="curtain-effect"></div>
      <div className="h-1/5 bg-black flex justify-between p-3 items-center text-white border-t-4 border-t-marvel-red">
        <span className="text-xs z-10">{character?.name}</span>
        <img
          src={heart}
          alt="Icon heart"
          width="13"
          height="12"
          className="z-10"
        />
      </div>
    </div>
  );
}
