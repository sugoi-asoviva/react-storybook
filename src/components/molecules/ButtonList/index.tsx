import React from 'react'
import Button from 'src/components/atoms/Button/'
import Spacer from 'src/components/atoms/Spacer'
import styled from 'styled-components'

type Props = {
  className?: string
}

const component: React.VFC<Props> = (props) => {
  return (
    <div className={props.className}>
      <Button colorTheme="light" linkTo="https://digital.go.jp" buttonText="デジタル庁" />
      <Spacer width={"4px"} />
      <Button colorTheme="dark" linkTo="https://google.com" buttonText="グーグル" />
    </div>
  )
}

const styledComponent = styled(component) <Props>``

export default styledComponent
