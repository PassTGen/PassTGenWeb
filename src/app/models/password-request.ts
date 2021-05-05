export type PassphraseReq = {
  length: number,
  auth: string,
};
export type PasswordReq = PassphraseReq & {
  symbols: "alpha" | "alphanumeric" | "alphanumericspecial",
  capitalize: boolean,
};
