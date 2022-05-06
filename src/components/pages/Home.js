import { Button, Title } from './homeStyled'
import { useState } from 'react'
export function Home() {
  const [display, setDisplay] = useState(false)
  function handelClick() {
    setDisplay(!display)
    console.log('click')
  }
  console.log(display)
  return (
    <div>
      <Title display={display}>Home</Title>
      <Button onClick={handelClick}>display</Button>
    </div>
  )
}
