// api.js

const express = require('express');
const apiRouter = express.Router();
const axios = require('axios');

const getNftByAddress = (req, res) => {
  // get address from params
  const address = req.params.address;

  const query = `{
    tokens(networks: [{network: ETHEREUM, chain: MAINNET}], 
          where: {ownerAddresses: "${address}"}) {
      nodes {
        token {
          collectionAddress
          tokenId
          name
          owner
          image {
            url
          }
          metadata
        }
      }
    }
  }`

  axios.get(`https://api.zora.co/graphql?query=${query}`)
  .then(response => {
    // if no data, send error response
    if (response.data.data === null)
      res.status(400).send(response.data.errors[0].message);
    else {
      // format response data into simple array of objects
      let data = response.data.data.tokens.nodes;
      data = data.map(item => item.token);
      res.status(200).send(data)
    }
  })
  //catch server error
  .catch(err => res.status(400).send(err.message));
}

apiRouter.route('/nft/:address').get(getNftByAddress);


module.exports = { apiRouter };