import { useState } from "react";
import loupe from "../../assets/loupe.svg";
import { SearchSectionProps } from "./SearchSectionProps";

export default function SearchSection({ onSearch }: SearchSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <section className="h-20 w-full bg-white px-4 md:px-12 flex justify-center flex-col">
      <div className="flex pb-1 w-full border-b border-black">
        <img src={loupe} alt="icon loupe" width="13" height="13" />
        <input
          type="text"
          placeholder="SEARCH A CHARACTER..."
          value={searchTerm}
          onChange={handleChange}
          className="w-full ml-2 border border-transparent px-2 py-1 placeholder-[#AAAAAA] outline-none text-black text-sm"
        />
      </div>
      <p className="text-black text-xs mt-2">50 RESULTS</p>
    </section>
  );
}
