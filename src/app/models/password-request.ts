export type PasswordReq = {
  symbols: "alpha" | "alphanumeric" | "alphanumericspecial",
  capitalize: boolean,
  length: number,
  auth: string,
};

export type PassphraseReq = {
  capitalize: boolean,
  length: number,
  auth: string,
};
