import { describe, it, expect, vi } from "vitest";
import SparkMD5 from "spark-md5";
import { generateTimestamp, generateHash } from "./api";

const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

vi.stubEnv("VITE_MARVEL_PUBLIC_KEY", publicKey);
vi.stubEnv("VITE_MARVEL_PRIVATE_KEY", privateKey);

describe("API Functions", () => {
  it("generateTimestamp should return a string representation of a timestamp", () => {
    const timestamp = generateTimestamp();
    expect(timestamp).toBeTypeOf("string");
    expect(Number(timestamp)).toBeGreaterThan(0);
  });

  it("generateHash should return the correct hash value", () => {
    const ts = "1234567890";
    const expectedHash = SparkMD5.hash(ts + privateKey + publicKey);
    const hash = generateHash(ts);
    expect(hash).toBe(expectedHash);
  });
});
