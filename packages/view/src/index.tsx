import React from 'react'
import ReactDom from 'react-dom'

class A extends React.Component<any, any> {
  public render () {
    return (
      <div></div>
    )
  }
}

ReactDom.render(
  <A />,
  document.querySelector('#app')
)
