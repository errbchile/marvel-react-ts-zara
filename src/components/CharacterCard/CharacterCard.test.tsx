import { render, fireEvent } from "@testing-library/react";
import { vi, describe, it } from "vitest";
import CharacterCard from "./CharacterCard";
import { MemoryRouter } from "react-router-dom";
import { characterType } from "./CharacterType";

vi.mock("../../context/useFavorites", () => ({
  useFavorites: vi.fn(() => ({
    addFavorite: vi.fn(),
    removeFavorite: vi.fn(),
    isFavorite: vi.fn().mockImplementation((id: number) => id === 1), // Simula que el ID 1 es favorito
  })),
}));

describe("CharacterCard", () => {
  const mockCharacter: characterType = {
    id: 1,
    name: "Spider-Man",
    thumbnail: {
      path: "https://example.com/spider-man",
      extension: "jpg",
    },
    description: "",
    modified: "",
    resourceURI: "",
  };

  it("should navigate to character detail page when clicked", () => {
    const { container } = render(
      <MemoryRouter>
        <CharacterCard character={mockCharacter} />
      </MemoryRouter>
    );

    const card = container.querySelector(".card-content");
    if (card) {
      fireEvent.click(card);
    }
  });
});
