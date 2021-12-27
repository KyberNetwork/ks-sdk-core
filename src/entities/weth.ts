import { Token } from './token'

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  MATIC = 137,
  MUMBAI = 80001,
  BSCTESTNET = 97,
  BSCMAINNET = 56,
  AVAXTESTNET = 43113,
  AVAXMAINNET = 43114,
  FANTOM = 250,
  CRONOSTESTNET = 338,
  CRONOS = 25
  // AURORA = 1313161554
}

export const WETH = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ROPSTEN]: new Token(
    ChainId.ROPSTEN,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.RINKEBY]: new Token(
    ChainId.RINKEBY,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.MATIC]: new Token(
    ChainId.MATIC,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'WMATIC',
    'Wrapped Matic'
  ),
  [ChainId.MUMBAI]: new Token(
    ChainId.MUMBAI,
    '0x19395624C030A11f58e820C3AeFb1f5960d9742a',
    18,
    'WMATIC',
    'Wrapped Matic'
  ),
  [ChainId.BSCTESTNET]: new Token(
    ChainId.BSCTESTNET,
    '0xae13d989dac2f0debff460ac112a837c89baa7cd',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [ChainId.BSCMAINNET]: new Token(
    ChainId.BSCMAINNET,
    '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [ChainId.AVAXTESTNET]: new Token(
    ChainId.AVAXTESTNET,
    '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
    18,
    'WAVAX',
    'Wrapped AVAX'
  ),
  [ChainId.AVAXMAINNET]: new Token(
    ChainId.AVAXMAINNET,
    '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
    18,
    'WAVAX',
    'Wrapped AVAX'
  ),
  [ChainId.FANTOM]: new Token(
    ChainId.FANTOM,
    '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
    18,
    'WFTM',
    'Wrapped Fantom'
  ),
  [ChainId.CRONOSTESTNET]: new Token(
    ChainId.CRONOSTESTNET,
    '0x1A46dCaC1d91F1731574BEfAEDaC4E0392726e35',
    18,
    'WCRO',
    'Wrapped CRO'
  ),
  [ChainId.CRONOS]: new Token(ChainId.CRONOS, '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23', 18, 'WCRO', 'Wrapped CRO')
  // [ChainId.AURORA]: new Token(ChainId.AURORA, '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB', 18, 'WETH', 'Wrapped ETH')
}
