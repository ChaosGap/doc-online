import { IFontWeight, DefaultFontSize, DefaultFontFamily } from './types'
import { IUnits } from '../Types'

export class CFont {
  public fontSize: number
  public fontFamily: string
  public fontWeight: IFontWeight
  public unit: IUnits

  constructor (size?: number, family?: string, weight?: IFontWeight, unit?: IUnits) {
    this.fontSize   = size   ?? DefaultFontSize
    this.fontFamily = family ?? DefaultFontFamily
    this.fontWeight = weight ?? IFontWeight.Normal
    this.unit       = unit   ?? IUnits.PX
  }

  public setFontSize (size: number) {
    this.fontSize = size
  }

  public setFontFamily (family: string) {
    this.fontFamily = family
  }

  public setFontWeight (weight: IFontWeight) {
    this.fontSize = weight
  }

  public copy () {
    return new CFont(this.fontSize, this.fontFamily, this.fontWeight)
  }

  public render () {
    return {
      'fontSize': `${this.fontSize}${this.unit}`,
      'fontFamily': `${this.fontFamily}`,
      'fontWeight': this.fontWeight
    }
  }
}
