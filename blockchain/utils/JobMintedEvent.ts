import { BigNumberish } from "ethers/lib/ethers"

export interface JobMintedEvent {
  from: string,
  to: string,
  tokenId: number,
  tokenURI: string,
  description: {
    title: string,
    description: string,
    employee: string,
    company: string,
    startDate: BigNumberish,
    endDate: BigNumberish | null
  }
}