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

let a: any = 123
console.log(a)

ReactDom.render(
  <A />,
  document.querySelector('#app')
)
