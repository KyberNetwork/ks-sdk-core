import { getAddress } from '@ethersproject/address'
import { PublicKey } from '@solana/web3.js'
import { ChainId, ChainType, getChainType } from '../entities/chain'

const isValidSolanaAddress = (address: string): boolean => {
  try {
    if (!address) return false
    const pub = new PublicKey(address)
    return PublicKey.isOnCurve(pub)
  } catch (e) {
    return false
  }
}

/**
 * Validates an address and returns the parsed (checksummed) version of that address
 * @param address the unchecksummed hex address
 */
export function validateAndParseAddress(address: string, chainId: ChainId): string {
  try {
    const chainType = getChainType(chainId)
    if (chainType === ChainType.SOLANA) {
      if (isValidSolanaAddress(address)) return address
      throw new Error()
    }
    return getAddress(address)
  } catch (error) {
    throw new Error(`${address} is not a valid address.`)
  }
}
