import React from 'react'
import ReactDom from 'react-dom'

class A extends React.Component {
  public render () {
    return (
      <div>
        123
      </div>
    )
  }
}

ReactDom.render(
  <A />,
  document.querySelector('#app')
)
