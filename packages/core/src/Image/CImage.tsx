import React from 'react'
import { IImageProps, IImageState, DefaultImageUrl } from './types'
import { IUnits } from '../Types'

// TODO: Image 应该有自己的 Image Style - 标志用于左右环绕等
export class CImage extends React.Component<IImageProps, IImageState> {
  public readonly instanceType: string = 'CImage'
  public src: string
  public title: string
  public alt: string
  public width: number
  public height: number
  public unit: IUnits

  constructor (src?: string) {
    super(null, null)
    this.src = src ?? DefaultImageUrl
  }

  public render () {
    return (
      <img
        width={`${this.width}${this.unit}`}
        height={`${this.height}${this.unit}`}
        src={this.src}
        alt={this.alt}
        title={this.title} />
    )
  }
}
