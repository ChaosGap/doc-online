import React from 'react'

import { CStyles } from '../Styles/CStyles'

import { IParaProps, IParaState, IParaContent } from './types'

export class CParagraph extends React.Component<IParaProps, IParaState> {
  public styles: CStyles
  public content: IParaContent[]

  public addContent (item: IParaContent, pos?: number, delCount?: number) {
    pos = pos ?? this.content.length
    delCount = delCount ?? 0
    this.content.splice(pos, delCount, item)
  }

  public getText () {
    return this.content.reduce((text: string, item: IParaContent) => {
      return text + item.getText()
    }, '')
  }

  public render () {
    return (
      <p>
        {
          this.content.map((item: IParaContent) => {
            return item.render()
          })
        }
      </p>
    )
  }
}
