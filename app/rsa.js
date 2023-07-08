import * as crypto from 'crypto';
const encryptMessage = (message, publicKey) => {
    const encryptedBuffer = crypto.publicEncrypt(
      publicKey,
      Buffer.from(message, 'utf8'),
    );
    const encryptedMessage = encryptedBuffer.toString('base64');
    return encryptedMessage;
  };
  module.exports =  encryptMessage