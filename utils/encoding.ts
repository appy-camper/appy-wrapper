import Base64 from "Base64";

/**
 * Converts a string to a Base64 URL encoded string.
 * @param text - The input string to encode.
 * @returns The Base64 URL encoded string.
 */
export function toBase64Url(text: string): string {
  const base64 = Base64.btoa(text);
  return encodeURIComponent(base64 as string);
}

/**
 * Converts a Base64 URL encoded string back to a regular string.
 * @param base64Url - The Base64 URL encoded string to decode.
 * @returns The decoded string.
 */
export function fromBase64Url(base64Url: string): string {
  const decoded = decodeURIComponent(base64Url);
  return Base64.atob(decoded);
}
