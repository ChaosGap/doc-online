import { CBorderItem } from './CBorderItem'
import { IBorderType } from './types'
import { IUnits } from '../Types'

export class CBorder {
  public top: CBorderItem = new CBorderItem()
  public right: CBorderItem = new CBorderItem()
  public bottom: CBorderItem = new CBorderItem()
  public left: CBorderItem = new CBorderItem()

  public setColor (val: string) {
    this.top.setColor(val)
    this.right.setColor(val)
    this.bottom.setColor(val)
    this.left.setColor(val)
  }

  public setStyle (style: IBorderType) {
    this.top.setStyle(style)
    this.right.setStyle(style)
    this.bottom.setStyle(style)
    this.left.setStyle(style)
  }

  public setWidth (width: number) {
    this.top.setWidth(width)
    this.right.setWidth(width)
    this.bottom.setWidth(width)
    this.left.setWidth(width)
  }

  public setUnit (unit: IUnits) {
    this.top.setUnit(unit)
    this.right.setUnit(unit)
    this.bottom.setUnit(unit)
    this.left.setUnit(unit)
  }

  public copy () {
    const newCBorder = new CBorder()
    newCBorder.top = this.top.copy()
    newCBorder.right = this.right.copy()
    newCBorder.bottom = this.bottom.copy()
    newCBorder.left = this.left.copy()
    return newCBorder
  }

  public render () {
    return {
      'borderTop': this.top.render(),
      'borderRight': this.right.render(),
      'borderBottom': this.bottom.render(),
      'borderLeft': this.left.render()
    }
  }
}
