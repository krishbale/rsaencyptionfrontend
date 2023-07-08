import NodeRSA from "node-rsa";
export default function rsaencrypt(key,text){
            const  keyPublic = new NodeRSA(key)
            const encrypted = keyPublic.encrypt(text,'base64')
            return encrypted 

}
