let sha256 = require("crypto-js/sha256");
module.exports = function(data, previousHash) {

         this.buildHash = function() {
            return sha256(JSON.stringify(this.data).toString() + this.nonce + this.timestamp + this.previousHash).toString();
        }
        this.data = data;

        this.previousHash = previousHash;
        this.nonce = 0;

        this.hash = this.buildHash();
        this.timestamp = new Date();
        return this;
}
