import SparkMD5 from "spark-md5";
import { characterType } from "../components/CharacterCard/CharacterType";

const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

export function generateTimestamp() {
  return new Date().getTime().toString();
}

export function generateHash(ts: string) {
  const stringToHash = ts + privateKey + publicKey;
  return SparkMD5.hash(stringToHash);
}

export async function fetchCharacterDetails(resourceURI: string) {
  const ts = generateTimestamp();
  const hash = generateHash(ts);

  const url = `${resourceURI}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }
  return response.json();
}

export async function getMarvelCharacters() {
  const ts = generateTimestamp();
  const hash = generateHash(ts);

  const url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }

  const data = await response.json();

  const charactersWithDetails = await Promise.all(
    data.data.results.map(async (character: characterType) => {
      const details = await fetchCharacterDetails(character.resourceURI);
      return {
        ...character,
        thumbnail: details.data.results[0]?.thumbnail,
      };
    })
  );

  return { ...data, data: { ...data.data, results: charactersWithDetails } };
}
