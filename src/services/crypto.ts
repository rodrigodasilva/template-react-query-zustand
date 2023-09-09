import * as crypto from 'crypto-js';

export function encryptPassword(password: string) {
  return crypto.AES.encrypt(password, crypto.enc.Utf8.parse('!key-encode'), {
    iv: crypto.enc.Utf8.parse('*!F019-App!*'),
    mode: crypto.mode.CBC,
  }).toString();
}
