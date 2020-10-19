require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note situate color harvest opinion slot giggle'; 
let testAccounts = [
"0x784f208caf1f042266fcee0a980e8d2975a7c8e4e5849886d24acf969c0ffa39",
"0x9db22a8274f797b2d8572c8879c181940f96ac2e109c86e28d23448a72f7e99b",
"0xcefa6e7df9f99fb866e69c34734f0d87409fe14211f463bb2b93e3839bff82da",
"0x8eb8bcf212300e53caf9e03e529ac8f6870d6900d2a7f6b336ba785b45c8ddb3",
"0xbf7e34cb10352f225407e735195a660d6ea5234799943a8ad9f6d8da1f68fc11",
"0x12be85a3bb868fc05e6de38dc8648387b921181710005b7846fc3d0c96af9caa",
"0x9e473b38aacb316d6e5a1f65d78ca6640747d65520df93590462fb6045d359c8",
"0x78766d72ec59da6533ea6e2dc1be8d76cf5eb40f4e74b19eb838fa2837dfe71d",
"0x54cb01c172bdb11a4a8515012b3b1fed72b11f730a3e7dfaa7253871c9db7cfb",
"0xa3b5cda0229c8f18cccfba6d5d35cef5f5b140219dd7d7b225021bc097a4171b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
