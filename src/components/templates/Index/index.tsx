import React from 'react'
import ButtonList from 'src/components/molecules/ButtonList'
import styled from 'styled-components'

type Props = {
  pageName: string;
  className?: string;
}

const component: React.VFC<Props> = (props) => {
  return (
    <div className={props.className}>
      <h1>{props.pageName}</h1>
      <ButtonList />
    </div>
  )
}

const styledComponent = styled(component)`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
`

export default styledComponent
