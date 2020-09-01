import React from 'react'

import { CStyles } from '../Styles/CStyles'

import { ISpanProps, ISpanState, ISpanContent } from './types'

export class CSpan extends React.Component<ISpanProps, ISpanState> {
  public readonly instanceType: string = 'CSpan'
  public styles: CStyles = new CStyles()
  public content: ISpanContent[] = []

  public addContent (item: ISpanContent, pos?: number, delCount?: number) {
    pos = pos ?? this.content.length
    delCount = delCount ?? 0
    this.content.splice(pos, delCount, item)
  }

  public getText () {
    return this.content.reduce((text: string, item: ISpanContent) => {
      if ((item as any)?.instanceType !== 'CImage') {
        text += item
      }
      return text
    }, '')
  }

  public getContentLength () {
    return this.content.length
  }

  public render () {
    return (
      <span
        style={this.styles.render()}>
        { this.content.join('') }
      </span>
    )
  }
}
