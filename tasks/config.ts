export enum Network {
  goerli = "goerli",
  mainnet = "mainnet",
}

export interface Params<T> {
  [Network.goerli]: T;
  [Network.mainnet]: T;
}

export const getParams = <T>({ goerli, mainnet }: Params<T>, network: string): T => {
  network = Network[network as keyof typeof Network];
  switch (network) {
    case Network.goerli:
      return goerli;
    case Network.mainnet:
      return mainnet;
    default:
      return goerli;
  }
};

const INFURA_KEY = process.env.INFURA_KEY || "";
const ALCHEMY_KEY = process.env.ALCHEMY_KEY || "";

export const NETWORKS_RPC_URL: Params<string> = {
  [Network.goerli]: ALCHEMY_KEY
    ? `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_KEY}`
    : `https://goerli.infura.io/v3/${INFURA_KEY}`,
  [Network.mainnet]: ALCHEMY_KEY
    ? `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`
    : `https://mainnet.infura.io/v3/${INFURA_KEY}`,
};

export const FEE: Params<string> = {
  [Network.goerli]: "100",
  [Network.mainnet]: "400",
};

export const FEE_RECIPIENT: Params<string> = {
  [Network.goerli]: "0x10855337e1b0D2d11F8f59Ba4b04EC8792A58B61",
  [Network.mainnet]: "0x472FcC65Fab565f75B1e0E861864A86FE5bcEd7B",
};

export const WETH: Params<string> = {
  [Network.goerli]: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  [Network.mainnet]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
};

export const APE_COIN: Params<string> = {
  [Network.goerli]: "0x701ca86a355dA5E32b70a9c7e8967B4DFaa735dB",
  [Network.mainnet]: "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
};

export const APE_COIN_HOLDER: Params<string> = {
  [Network.goerli]: "0xafF5C36642385b6c7Aaf7585eC785aB2316b5db6",
  [Network.mainnet]: "",
};

export const APE_STAKING: Params<string> = {
  [Network.goerli]: "0xa1d0e0Ac6D1300F47caC9083b23D07F62bB1F833",
  [Network.mainnet]: "0x5954aB967Bc958940b7EB73ee84797Dc8a2AFbb9",
};

export const BAYC: Params<string> = {
  [Network.goerli]: "0x30d190032A34d6151073a7DB8793c01Aa05987ec",
  [Network.mainnet]: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
};

export const bBAYC: Params<string> = {
  [Network.goerli]: "0x529710d1e2ab61bDea707039bB841583A983b228",
  [Network.mainnet]: "0xDBfD76AF2157Dc15eE4e57F3f942bB45Ba84aF24",
};

export const MAYC: Params<string> = {
  [Network.goerli]: "0x15596C27900e12A9cfC301248E21888751f61c19",
  [Network.mainnet]: "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
};

export const bMAYC: Params<string> = {
  [Network.goerli]: "0xe7BD47E781e8758420Df9992ADD1f5ab31555fF7",
  [Network.mainnet]: "0x69f37e419bD1457d2a25ed3f5d418169caAe8D1F",
};

export const BAKC: Params<string> = {
  [Network.goerli]: "0x49EdA925C67387b4597F4b41817Aaade0542EeD5",
  [Network.mainnet]: "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623",
};

export const BNFT_REGISTRY: Params<string> = {
  [Network.goerli]: "0x37A76Db446bDB3EF1b73112a8D5E6868de06464f",
  [Network.mainnet]: "0x79d922DD382E42A156bC0A354861cDBC4F09110d",
};

export const BendAddressesProviders: Params<string> = {
  [Network.goerli]: "0x1cba0A3e18be7f210713c9AC9FE17955359cC99B",
  [Network.mainnet]: "0x24451f47caf13b24f4b5034e1df6c0e401ec0e46",
};

export const BendDebtETH: Params<string> = {
  [Network.goerli]: "0x9aB83A4886dCE3C0c1011f9D248249DD3eF64784",
  [Network.mainnet]: "0x87ddE3A3f4b629E389ce5894c9A1F34A7eeC5648",
};

export const MIN_COMPOUND_PARAMS: Params<number[]> = {
  [Network.goerli]: [10, 360],
  [Network.mainnet]: [100, 3600],
};
