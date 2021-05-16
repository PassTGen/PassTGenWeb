import { PassphraseReq } from "./passphrase";

export type PasswordRequest = PassphraseReq & {
  symbols: "Alpha" | "AlphaNumeric" | "AlphaNumericSpecial";
  capitalize: boolean;
};
export const symbols = ["Alpha", "AlphaNumeric", "AlphaNumericSpecial"];

export type PasswordResponse = { password: string; };
