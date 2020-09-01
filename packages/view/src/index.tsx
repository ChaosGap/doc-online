import React from 'react'
import ReactDom from 'react-dom'

import { CSpan } from '../../core/src/Span/CSpan'
import { IBorderType } from 'core/src/Border/types'

class A extends React.Component<any, any> {
  public render () {
    const a = new CSpan(null, null)
    a.addContent('Chaos')
    a.styles.border.setColor('red')
    a.styles.border.setWidth(1)
    a.styles.border.setStyle(IBorderType.Dotted)
    a.styles.font.setFontFamily('Cursive')
    a.styles.font.setFontSize(18)
    return (
      <div>
        {
          a.render()
        }
      </div>
    )
  }
}

ReactDom.render(
  <A />,
  document.querySelector('#app')
)
