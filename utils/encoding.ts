import Base64 from "Base64";

export function toBase64(text: string): string {
  const base64 = Base64.btoa(text);
  return encodeURIComponent(base64 as string);
}

export function fromBase64(base64Text: string): string {
  const decoded = decodeURIComponent(base64Text);
  return Base64.atob(decoded);
}
