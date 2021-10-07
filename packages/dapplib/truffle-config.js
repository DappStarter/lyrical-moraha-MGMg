require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth remember unusual gesture drink equal gasp'; 
let testAccounts = [
"0x43d8239de252a951ddf6cb89c7dfb3f6a4ff69bad7062530c16e3cb9b4dcf93f",
"0xf7d2e44c86f5c0534078bba06d5732be44b5e6a12d6eb5155490738f7385f77b",
"0x2532fec00c5f9f6ccaa9cc3cbe91cd116f3bab91cffc32f5659d21598a7f29a1",
"0x01d7ba08bf2e0d3c19ec736a298e52eb9718882c2290037d04d541103ffbf324",
"0xfbb6bee25a35f69196b7a4b473961dcb9d00fd8dde3cc3d0db71e83e70da2834",
"0xd3b6f7a86b1d7ff7e4bbe11b10611424433b8473dd732230ec6e1d12116dda91",
"0xcaf03645500cf626d7511230727abc1d70b27fb8e2a81cdb5a97a7f4442bca69",
"0x594b629c3f39696e90d288327a12a3c91f22d71c731ef98464b4f27eedfc3ab7",
"0xc924925a0760320103e31e0f7e2a5edd290dff7f13f0b891e0adf7e8c4d7fd53",
"0x9686a0576de029c97e01ab009643357ac6eabd3736e54bacfc48c7aaead653e0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


