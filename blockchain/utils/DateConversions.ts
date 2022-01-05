import { BigNumberish } from "ethers"

export const dateToBigNumber = (date: Date): BigNumberish  => {
    return parseInt((date.getTime() / 1000).toFixed(0))
}
