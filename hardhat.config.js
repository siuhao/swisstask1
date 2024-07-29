require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["d0d8897d8de987972776c5fec4c11b93dcd73e803b41bf91673201eedb4bc8b1"], //Your private key starting with "0x"
    },
  },
};