import CryptoJS from 'crypto-js';

const secretKey = process.env.CRYPT_KEY!;
const secretIv = process.env.CRYPT_IV!;

const KEY = CryptoJS.enc.Utf8.parse(secretKey);
const IV = CryptoJS.enc.Utf8.parse(secretIv);

export const encrypt = (value: string): string | false => {
  try {
    const encrypted = CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(value),
      KEY,
      {
        iv: IV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );
    // Replace '+' with '-', '/' with '_', and remove '='
    return encrypted
      .toString()
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  } catch (error) {
    console.error('Encryption error:', error);
    return false;
  }
};

export const decrypt = (value: string): string | false => {
  try {
    // Replace '-' with '+', '_' with '/', and add back the removed '='
    let base64 = value.replace(/-/g, '+').replace(/_/g, '/');
    const decrypted = CryptoJS.AES.decrypt(base64, KEY, {
      iv: IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return CryptoJS.enc.Utf8.stringify(decrypted);
  } catch (error) {
    console.error('Decryption error:', error);
    return false;
  }
};
