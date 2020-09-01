import { IBorderType } from './types'
import { IUnits } from '../Types'

export class CBorderItem {
  public width: number
  public style: IBorderType
  public color: string
  public unit: IUnits

  constructor (width?: number, style?: IBorderType, color?: string, unit?: IUnits) {
    this.width = width ?? 0
    this.style = style ?? IBorderType.None
    this.color = color ?? '#000'
    this.unit = unit   ?? IUnits.PX
  }

  public setColor (color: string) {
    this.color = color
  }

  public setStyle (style: IBorderType) {
    this.style = style
  }

  public setWidth (width: number) {
    this.width = width
  }

  public setUnit (unit: IUnits) {
    this.unit = unit
  }

  public copy () {
    const newCBorderItem = new CBorderItem()
    newCBorderItem.color = this.color
    newCBorderItem.style = this.style
    newCBorderItem.width = this.width
    newCBorderItem.unit  = this.unit
    return newCBorderItem
  }

  public render () {
    return (
      `${this.width}${this.unit} ${this.style} ${this.color}`
    )
  }
}
