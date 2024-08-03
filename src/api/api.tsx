import SparkMD5 from "spark-md5";

const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

export function generateTimestamp() {
  return new Date().getTime().toString();
}

export function generateHash(ts: string) {
  const stringToHash = ts + privateKey + publicKey;
  return SparkMD5.hash(stringToHash);
}

export async function getMarvelCharacters({
  name,
  nameStartsWith,
  modifiedSince,
  comics,
  series,
  events,
  stories,
  orderBy,
  limit = 50,
  offset = 0,
}: {
  name?: string;
  nameStartsWith?: string;
  modifiedSince?: string;
  comics?: string;
  series?: string;
  events?: string;
  stories?: string;
  orderBy?: string;
  limit?: number;
  offset?: number;
}) {
  const ts = generateTimestamp();
  const hash = generateHash(ts);

  const params = new URLSearchParams({
    ts,
    apikey: publicKey,
    hash,
    limit: limit.toString(),
    offset: offset.toString(),
    ...(name && { name }),
    ...(nameStartsWith && { nameStartsWith }),
    ...(modifiedSince && { modifiedSince }),
    ...(comics && { comics }),
    ...(series && { series }),
    ...(events && { events }),
    ...(stories && { stories }),
    ...(orderBy && { orderBy }),
  });

  const url = `http://gateway.marvel.com/v1/public/characters?${params.toString()}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }

  const data = await response.json();
  console.log({ data });
  return data;
}
