export type PassphraseReq = {
  length: number,
  auth: string,
};

export type PassphraseResponse = { passphrase: string; };
