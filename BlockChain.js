let Block = require('./Block')
// let sha256 = require("crypto-js/sha256");
// class Block {
//   constructor(data, previousHash) {
//     this.data = data;
//
//     this.previousHash = previousHash;
//     this.nonce = 0;
//     this.hash = this.buildHash();
//     this.timestamp = new Date();
//   }
//   buildHash() {
//       return sha256(JSON.stringify(this.data).toString() + this.nonce + this.timestamp + this.previousHash).toString();
//   }
// }

class BlockChain {
  constructor() {
    this.chain = [this.genesisBlock()];
  }
  genesisBlock() {
    let genesisBlock =  new Block({"amount" : 0, "senderId" : "" , "receiverId": ""}, "0");
    genesisBlock.buildHash();
    return genesisBlock;
  }

  getBlock(index) {
    if (index <= this.chain.length-1) {
      console.log("index" + index);
      return this.chain[index];
    }
    return null;
  }

  isChainValid(){
    for (let index = 1; index < this.chain.length-1 ; index ++) {
        console.log(this.chain[index].hash);
        if (this.chain[index].previousHash != this.chain[index-1].hash ) {
          return false;
        }
    }
    return true;
  }

  addBlock(newBlock) {
    let latestBlock = this.getBlock(this.chain.length-1);
    newBlock.previousHash = latestBlock.hash;
    newBlock.hash = newBlock.buildHash();
    this.chain.push(newBlock);
    console.log(this.chain);
  }
}

let chain = new BlockChain();
chain.addBlock(new Block({"amount" : 100, "senderId" : "ASK" , "receiverId": "dummy"}));

console.log("valid chain " + chain.isChainValid());
