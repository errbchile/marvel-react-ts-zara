import CharacterCard from "../CharacterCard/CharacterCard";

export default function CharactersList() {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      <CharacterCard />
    </div>
  );
}
