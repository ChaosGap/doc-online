import { CBorder } from '../Border/CBorder'
import { CFont } from '../Font/CFont'

export class CStyles {
  public border: CBorder = new CBorder()
  public font: CFont = new CFont()

  public render () {
    return {
      ...this.border.render(),
      ...this.font.render()
    }
  }
}
