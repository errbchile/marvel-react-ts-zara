import { ComicCardByCharacterProps } from "./ComicCardByCharacterProps";

export default function ComicCardByCharacter({
  comic,
}: ComicCardByCharacterProps) {
  const year = new Date(comic.modified).getFullYear();

  return (
    <div className="min-w-[180px] bg-white py-4 flex flex-col items-center">
      <img
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
        className="w-full h-60 object-cover"
      />
      <div className="mt-4 w-full">
        <p className="text-sm font-bold text-black">{comic.title}</p>
        <p className="text-xs text-gray-500">{year}</p>
      </div>
    </div>
  );
}
