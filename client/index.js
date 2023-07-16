#!/usr/bin/env node
const axios = require('axios');
const { faker } = require('@faker-js/faker');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  const nodeIdx =
    process.argv[2] ?? Math.floor(Math.random() * niceList.length);
  const merkleTree = new MerkleTree(niceList);
  const node = niceList[nodeIdx] ?? faker.internet.userName();
  console.log({ node });
  const proof = merkleTree.getProof(nodeIdx);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    proof,
    node,
  });

  console.log({ gift });
}

main();
