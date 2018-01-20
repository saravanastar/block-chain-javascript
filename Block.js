let sha256 = require("crypto-js/sha256");
module.exports = {

    class Block {
      constructor(data, previousHash) {
        this.data = data;

        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.buildHash();
        this.timestamp = new Date();
      }
      buildHash() {
          return sha256(JSON.stringify(this.data).toString() + this.nonce + this.timestamp + this.previousHash).toString();
      }
    }

}
