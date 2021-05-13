export type PassphraseReq = {
  length: number,
  auth: string,
};
export type PasswordReq = PassphraseReq & {
  symbols: "Alpha" | "AlphaNumeric" | "AlphaNumericSpecial",
  capitalize: boolean,
};

export const symbols = ["Alpha", "AlphaNumeric", "AlphaNumericSpecial"];
