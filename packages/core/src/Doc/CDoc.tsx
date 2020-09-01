import React from 'react'
import ReactDom from 'react-dom'

import { CStyles } from '../Styles/CStyles'

import { IDocProps, IDocState, IDocContent } from './types'

export class CDoc extends React.Component<IDocProps, IDocState> {
  public styles: CStyles
  public content: IDocContent[]

  public addContent (item: IDocContent, pos?: number, delCount?: number) {
    pos = pos ?? this.content.length
    delCount = delCount ?? 0
    this.content.splice(pos, delCount, item)
  }

  public render () {
    return (
      <div>
        {
          this.content.map((item: IDocContent) => {
            return item.render()
          })
        }
      </div>
    )
  }
}
