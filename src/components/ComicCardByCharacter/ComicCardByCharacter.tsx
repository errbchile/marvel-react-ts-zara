import { ComicCardByCharacterProps } from "./ComicCardByCharacterProps";

export default function ComicCardByCharacter({
  comic,
}: ComicCardByCharacterProps) {
  return (
    <div key={comic.id} className="min-w-max">
      <img
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
        className="w-40 h-60 object-cover rounded"
      />
      {/* <p className="text-xs font-bold text-black break-words">{comic.title}</p> */}
    </div>
  );
}
