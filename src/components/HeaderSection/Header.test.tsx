import { render, screen } from "@testing-library/react";
import Header from "./HeaderSection";
import { vi, describe, it, expect } from "vitest";

vi.mock("../../context/useFavorites", () => ({
  useFavorites: vi.fn(() => ({
    favoriteIds: [1, 2, 3],
  })),
}));

describe("Header", () => {
  it("should render logo and heart icon", () => {
    render(<Header />);

    const logo = screen.getByAltText("Logo marvel");
    expect(logo).toBeInTheDocument();

    const heartIcon = screen.getByAltText("Icon heart");
    expect(heartIcon).toBeInTheDocument();

    const favoritesCount = screen.getByText("3");
    expect(favoritesCount).toBeInTheDocument();
  });
});
